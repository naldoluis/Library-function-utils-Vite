package com.library.naldo.controller;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import nl.captcha.Captcha;
import com.library.naldo.captcha.CaptchaGenerator;
import com.library.naldo.captcha.CaptchaUtils;
import com.library.naldo.config.JwtTokenProvider;
import com.library.naldo.domain.User;
import com.library.naldo.repository.RoleRepository;
import com.library.naldo.repository.UserRepository;
import com.library.naldo.service.impl.UserServiceC;
import com.library.naldo.utils.ConstantUtils;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:5173")
public class UserController {

	private static Logger log = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenProvider tokenProvider;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CaptchaGenerator captchaGenerator;

	@Autowired
	private UserServiceC userServiceC;

	private String message;

	@GetMapping("/register")
	public String add(Model model, HttpSession httpSession) {
		model.addAttribute("message", message);
		model.addAttribute("user", new User());
		Captcha captcha = captchaGenerator.createCaptcha(200, 50);
		httpSession.setAttribute("captcha", captcha.getAnswer());
		model.addAttribute("captchaEncode", CaptchaUtils.encodeBase64(captcha));
		return "register";
	}

	@PostMapping(value = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> register(@RequestBody User user, HttpServletRequest request) {
		log.info("UserResourceImpl : register ✔");
		JSONObject jsonObject = new JSONObject();
		try {
			user.getCaptcha().equals(request.getSession().getAttribute("captcha"));
			userServiceC.add(user);
			user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
			user.setRole(roleRepository.findByName(ConstantUtils.USER.toString()));
			User savedUser = userRepository.saveAndFlush(user);
			jsonObject.put("message", savedUser.getName() + " saved successfully ✔");
			return ResponseEntity.ok(jsonObject.toString());
		} catch (JSONException e) {
			try {
				jsonObject.put("⛔️ exception", e.getMessage());
			} catch (JSONException e1) {
				e1.printStackTrace();
			}
			return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.UNAUTHORIZED);
		}
	}

	@PostMapping(value = "/authenticate", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> authenticate(@RequestBody User user) {
		log.info("UserResourceImpl : authenticate ✔");
		JSONObject jsonObject = new JSONObject();
		try {
			Authentication authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
			if (authentication.isAuthenticated()) {
				String email = user.getEmail();
				jsonObject.put("name", authentication.getName());
				jsonObject.put("authorities", authentication.getAuthorities());
				jsonObject.put("token", tokenProvider.createToken(email, userRepository.findByEmail(email).getRole()));
				return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
			}
		} catch (JSONException e) {
			try {
				jsonObject.put("⛔️ exception", e.getMessage());
			} catch (JSONException e1) {
				e1.printStackTrace();
			}
			return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.UNAUTHORIZED);
		}
		return null;
	}
}
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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import com.library.naldo.config.JwtTokenProvider;
import com.library.naldo.domain.User;
import com.library.naldo.repository.RoleRepository;
import com.library.naldo.repository.UserRepository;
import com.library.naldo.utils.ConstantUtils;
import com.library.naldo.utils.ConstantCaptcha;
import java.util.concurrent.atomic.AtomicInteger;
import jakarta.servlet.http.HttpSession;
import org.springframework.ui.ModelMap;
import com.library.naldo.captcha.CaptchaGenerator;
import com.library.naldo.captcha.CaptchaUtils;
import nl.captcha.Captcha;

@RestController
@RequestMapping("/user")
@SessionAttributes("counter")
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

	@ModelAttribute("counter")
	public AtomicInteger failureCounter() {
		return new AtomicInteger(0);
	}

	@RequestMapping("/login")
	public String login(ModelMap model, HttpSession httpSession) {
		Object error = httpSession.getAttribute("error");
		if (error != null) {
			model.addAttribute("error", error);
			httpSession.removeAttribute("error");
		}

		Object message = httpSession.getAttribute("message");
		if (message != null) {
			model.addAttribute("message", message);
			httpSession.removeAttribute("message");
		}

		AtomicInteger counter = (AtomicInteger) model.get("counter");
		if(counter.intValue() >= ConstantCaptcha.MAX_CAPTCHA_TRIES) {
			Captcha captcha = captchaGenerator.createCaptcha(200, 50);
			httpSession.setAttribute("captcha", captcha);
			model.addAttribute("captchaEncode", CaptchaUtils.encodeBase64(captcha));
		}
		return "login";
	}

	@PostMapping(value = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> register(@RequestBody User user) {
		log.info("UserResourceImpl : register ✔");
		JSONObject jsonObject = new JSONObject();
		try {
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
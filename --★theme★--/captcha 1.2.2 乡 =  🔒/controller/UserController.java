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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import cn.apiclub.captcha.Captcha;
import com.library.naldo.captcha.CaptchaUtils;
import com.library.naldo.config.JwtTokenProvider;
import com.library.naldo.domain.User;
import com.library.naldo.repository.RoleRepository;
import com.library.naldo.repository.UserRepository;
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

	private void setupCaptcha(User e) {
		Captcha captcha = CaptchaUtils.createCaptcha(200, 50);
		e.setHidden(captcha.getAnswer());
		e.setCaptcha("");
		e.setImage(CaptchaUtils.encodeBase64(captcha));
	}

	@PostMapping(value = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> register(@RequestBody User user) {
		log.info("UserResourceImpl : register ✔");
		JSONObject jsonObject = new JSONObject();
		try {
			user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
			user.setRole(roleRepository.findByName(ConstantUtils.USER.toString()));
			setupCaptcha(user);
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

/* package in.nareshit.raghu.controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import cn.apiclub.captcha.Captcha;
import in.nareshit.raghu.captcha.CaptchaUtils;
import in.nareshit.raghu.modal.Employee;
import in.nareshit.raghu.service.IEmployeeService;

@Controller
@RequestMapping("/employee")
public class EmployeeController {

	@Autowired
	private IEmployeeService service;

	private void setupCaptcha(Employee e) {
		Captcha captcha = CaptchaUtils.createCaptcha(200, 50);
		e.setHidden(captcha.getAnswer());
		e.setCaptcha("");
		e.setImage(CaptchaUtils.encodeBase64(captcha));
	}

	@GetMapping("/register")
	public String showRegister(Model model) {
		Employee e  = new Employee();
		setupCaptcha(e);
		model.addAttribute("employee", e);

		return "EmployeeRegister";
	}

	@PostMapping("/save")
	public String saveEmployee(
			@ModelAttribute("employee") Employee employee,
			Model model) 
	{
		String page="";
		if(employee.getCaptcha().equals(employee.getHidden()))
		{
			service.createEmployee(employee);
			page ="redirect:all";
		} else {
			setupCaptcha(employee);
			return "EmployeeRegister";
		}
		return page;
	}

	@GetMapping("/all")
	public String getAllEmployees(Model model) 
	{
		model.addAttribute("list", service.getAllEmployees());
		return "EmployeeData";
	}

	@GetMapping("/edit/{id}")
	public String editEmployees(@PathVariable Integer id,Model model) 
	{
		String page = null;
		Optional<Employee> opt = service.getOneEmployee(id);
		if(opt.isPresent()) {
			Employee e = opt.get(); 
			setupCaptcha(e);
			model.addAttribute("employee", e);
			page = "EmployeeRegister";
		} else {
			page ="redirect:all";
		}
		return page;
	}
} */
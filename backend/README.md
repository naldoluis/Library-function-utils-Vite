# GET

	http://localhost:8080/rest/user/authenticate

	Using generated security password: 27b35cb3-51e6-46e5-b74e-42faa8e458d7

# Local
		cd C:\Library-Vite\frontend

		yarn installe
		yarn audit fix
		yarn upgrade
		yarn dev

# GitHub
		git commit -m "funcoes e recursos para projetos futuro"

# Requests

	{
		"email":"test@user.com",
		"password":"testuser"
	}
	or
	{
		"email":"test@admin.com",
		"password":"testadmin"
	}

# GET
	http://localhost:8080/rest/books            --> Busca Paginada  http://localhost:8080/rest/books?size=7&page=5

# GET By ID
	http://localhost:8080/rest/books/1

# POST
	http://localhost:8080/rest/books

# PUT
	http://localhost:8080/rest/books

# DELETE
	http://localhost:8080/rest/books/1

# Requests

	{
	    "title": "Spring in Action",
	    "author": "Craig Walls",
	    "photo": "https://images-na.ssl-images-amazon.com/images/I/51gHy16h5TL.jpg",
	    "isbn": 935119797,
	    "price": 630,
		"genre": "Fantasy",
	    "language": "English"
	}
	{
	    "title": "Java Persistence with Hibernate",
	    "author": "Christian Bauer and Gavin King",
	    "photo": "https://images.manning.com/720/960/resize/book/d/2ea186d-c683-4d54-95f9-cca25b6fe49e/bauer2.png",
	    "isbn": 951199193,
	    "price": 771,
		"genre": "Biography",
	    "language": "English"
	}
	{
	    "title": "Grails in Action",
	    "author": "Glen Smith and Peter Ledbrook",
	    "photo": "https://images.manning.com/720/960/resize/book/6/3e9d5ed-4155-466d-ab46-538bb355948d/gsmith2.png",
	    "isbn": 167290963,
	    "price": 907,
		"genre": "Technology",
	    "language": "English"
	}
	{
	    "title": "Spring Boot in Action",
	    "author": "Craig Walls",
	    "photo": "https://images.manning.com/720/960/resize/book/6/bb80688-f898-4df7-838a-253b1de123c4/Walls-SpringBoot-HI.png",
	    "isbn": 117292540,
	    "price": 149,
		"genre": "Science",
	    "language": "English"
	}
	{
	    "title": "Head First Java: A Brain-Friendly Guide",
	    "author": "Kathy Sierra",
	    "photo": "https://covers.oreillystatic.com/images/9780596004651/lrg.jpg",
	    "isbn": 873666024,
	    "price": 498,
		"genre": "Romance",
	    "language": "English"
	}

# 														import.sql

INSERT INTO tb_user(name, email, mobile, password) VALUES ('Maria', 'maria@gmail.com', '9787456540', (SELECT ENCODE(DIGEST('1234', 'sha512'), 'hex')))
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Joao', 'joao@gmail.com', '9787456541', (SELECT ENCODE(DIGEST('1235', 'sha512'), 'hex')))
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Cida', 'cida@gmail.com', '9787456542', (SELECT ENCODE(DIGEST('1236', 'sha512'), 'hex')))
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Natalia', 'natalia@gmail.com', '9787456543', (SELECT ENCODE(DIGEST('1237', 'sha512'), 'hex')))
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Talita', 'tata@gmail.com', '9787456544', (SELECT ENCODE(DIGEST('1238', 'sha512'), 'hex')))


INSERT INTO tb_user VALUES ('f051a0ab-5d4e-41e4-967d-2827d948d57a', '$2a$10$2KeflGXrfayDYOZlNzSrgeRTG/26lwjiuKAhsZxAk2lkPjLuZlNaG', 'maria')
INSERT INTO tb_user VALUES ('05efdfb1-e1b9-4f09-8abc-968905db6b11', '$2a$10$2KeflGXrfayDYOZlNzSrgeRTG/26lwjiuKAhsZxAk2lkPjLuZlNaG', 'joao')																									|
                                    	UUID													PASSWORD ENCODE = senha123
!J------------------------------------------------------------------------------------------------------------------------------J!

######            Application.java --> (Simula o arquivo import.sql na busca de livros no banco de dados)

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.library.naldo.domain.Book;
import com.library.naldo.domain.Role;
import com.library.naldo.domain.User;
import com.library.naldo.service.impl.IRoleService;
import com.library.naldo.service.impl.IService;
import com.library.naldo.utils.ConstantUtils;

@SpringBootApplication
public class Application implements CommandLineRunner {

	@Autowired
	private IService<User> userService;

	@Autowired
	private IRoleService<Role> roleService;

	@Autowired
	private IService<Book> bookService;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		if (roleService.findAll().isEmpty()) {
			roleService.saveOrUpdate(new Role(ConstantUtils.ADMIN.toString()));
			roleService.saveOrUpdate(new Role(ConstantUtils.USER.toString()));
		}

		if (userService.findAll().isEmpty()) {
			User user1 = new User();
			user1.setEmail("test@user.com");
			user1.setName("Test User");
			user1.setMobile("9787456545");
			user1.setRole(roleService.findByName(ConstantUtils.USER.toString()));
			user1.setPassword(new BCryptPasswordEncoder().encode("testuser"));
			userService.saveOrUpdate(user1);

			User user2 = new User();
			user2.setEmail("test@admin.com");
			user2.setName("Test Admin");
			user2.setMobile("9787456545");
			user2.setRole(roleService.findByName(ConstantUtils.ADMIN.toString()));
			user2.setPassword(new BCryptPasswordEncoder().encode("testadmin"));
			userService.saveOrUpdate(user2);
		}

		if (bookService.findAll().isEmpty()) {
			for (int i = 1; i <= 1000; i++) {
				Book book = new Book();
				book.setTitle("Spring Microservices in Action " + i);
				book.setAuthor("John Carnell " + i);
				book.setPhoto("https://images-na.ssl-images-amazon.com/images/I/417zLTa1uqL._SX397_BO1,204,203,200_.jpg");
				book.setIsbn(17293989L + i);
				book.setPrice(76.00 + i);
				book.setLanguage("English");
				book.setGenre("Technology");
				bookService.saveOrUpdate(book);
			}}}}

!J------------------------------------------------------------------------------------------------------------------------------J!

# UserDTO Method 2

package com.library.naldo.service;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.library.naldo.domain.User;
import com.library.naldo.dto.UserDTO;
import com.library.naldo.repository.UserRepository;
import com.library.naldo.service.impl.IServiceUser;

@Service
public class UserService implements IServiceUser<User> {

	@Autowired
	private UserRepository userRepository;

	@Transactional(readOnly = true)
	public Page<UserDTO> findAll(Pageable pageable) {
		Page<User> result = userRepository.findAll(pageable);
		Page<UserDTO> pageU = result.map(u -> new UserDTO(u));
		return pageU;
	}

	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		User result = userRepository.findById(id).get();
		UserDTO dtoU = new UserDTO(result);
		return dtoU;
	}

	@Override
	public User saveOrUpdate(User user) {
		return userRepository.saveAndFlush(user);
	}

	@Override
	public String deleteById(Long id) {
		JSONObject jsonObject = new JSONObject();
		try {
			userRepository.deleteById(id);
			jsonObject.put("message", "User deleted successfully");
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();
	}
}

!J------------------------------------------------------------------------------------------------------------------------------J!

## Spring Security Config Method 2

package com.library.naldo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Arrays;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JwtTokenProvider tokenProvider;

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManager() throws Exception {
		return super.authenticationManager();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors();
		http.csrf().disable().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
				.authorizeRequests().anyRequest().permitAll();
		http.apply(new JwtTokenConfigurer(tokenProvider));
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
		configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE", "OPTIONS"));
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}
}

!J------------------------------------------------------------------------------------------------------------------------------J!

### Spring Security Config Method 3

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SpringSecurityConfig implements WebMvcConfigurer {

    @Value("${cors.origins}")
    private String corsOrigins;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        String[] origins = corsOrigins.split(",");
        registry.addMapping("/**")
                .allowedMethods("*")
                .allowedOrigins(origins)
                .allowCredentials(true);
    }
}

!J------------------------------------------------------------------------------------------------------------------------------J!

# Book Controller Method 2

package com.library.naldo.controller;

import java.util.Arrays;
import java.util.Set;
import java.util.TreeSet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.library.naldo.domain.Book;
import com.library.naldo.dto.BookDTO;
import com.library.naldo.repository.BookRepository;
import com.library.naldo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import com.library.naldo.service.impl.IPageService;
import com.library.naldo.service.impl.IService;

@RestController
@RequestMapping("/books")
public class BookController implements Resource<Book> {

    @Autowired
    private BookService service;

    @Autowired
    private BookRepository repository;

	@Autowired
	private IPageService<Book> bookPageService;

	@Override
	public ResponseEntity<Page<Book>> findAll(Pageable pageable, String searchText) {
		return ResponseEntity.ok(bookPageService.findAll(pageable, searchText));
	}

	@Override
	public ResponseEntity<Page<Book>> findAll(int pageNumber, int pageSize, String sortBy, String sortDir) {
		return ResponseEntity.ok(bookPageService.findAll(PageRequest.of(pageNumber, pageSize, sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending())));
	}

    @GetMapping
    public Page<BookDTO> findAllBooks(Pageable pageable) {
        return service.findAll(pageable);
    }

    @GetMapping("/{id}")
    public BookDTO findOne(@PathVariable Long id) {
        return service.findById(id);
    }

    @DeleteMapping("{id}")
	@ResponseStatus(code = HttpStatus.OK)
	public void deleteBook(@PathVariable Long id) {
		service.deleteById(id);
	}

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
	public Book createBook(@RequestBody Book book) {
		return repository.save(book);
	}

	@Override
	public ResponseEntity<Book> findById(Long id) {
		return new ResponseEntity<>(service.findById(id).get(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Book> save(Book book) {
		return new ResponseEntity<>(service.saveOrUpdate(book), HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<Book> update(Book book) {
		return new ResponseEntity<>(service.saveOrUpdate(book), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> deleteById(Long id) {
		return new ResponseEntity<>(service.deleteById(id), HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<Book> saveBook(@RequestBody Book book) {
		return ResponseEntity.ok(repository.save(book));
	}

	@GetMapping("/languages")
	public  ResponseEntity<Set<String>> findAllLanguages() {
		return ResponseEntity.ok(new TreeSet<>(Arrays.asList("French", "Portuguese", "English", "Russian", "Hindi", "Arabic", "Spanish", "Chinese")));
	}

	@GetMapping("/genres")
	public  ResponseEntity<Set<String>> findAllGenres() {
		return ResponseEntity.ok(new TreeSet<>(Arrays.asList("Technology", "Science", "History", "Fantasy", "Biography", "Horror", "Romance")));
	}
}
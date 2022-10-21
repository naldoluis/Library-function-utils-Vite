# GET

	http://localhost:8080/user/authenticate

	Using generated security password: 27b35cb3-51e6-46e5-b74e-42faa8e458d7

# Local
		cd C:\Library-Vite\frontend

		yarn install
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
	http://localhost:8080/books            --> Busca Paginada  http://localhost:8080/books?size=7&page=5

# GET By ID
	http://localhost:8080/books/1

# POST
	http://localhost:8080/books

# PUT
	http://localhost:8080/books

# DELETE
	http://localhost:8080/books/1

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

# --------------------------------------import.sql------------------------------------

INSERT INTO tb_user(name, email, mobile, password) VALUES ('Maria', 'maria@gmail.com', '9787456540', (SELECT ENCODE(DIGEST('1234', 'sha512'), 'hex')))
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Joao', 'joao@gmail.com', '9787456541', (SELECT ENCODE(DIGEST('1235', 'sha512'), 'hex')))
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Cida', 'cida@gmail.com', '9787456542', (SELECT ENCODE(DIGEST('1236', 'sha512'), 'hex')))
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Natalia', 'natalia@gmail.com', '9787456543', (SELECT ENCODE(DIGEST('1237', 'sha512'), 'hex')))
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Talita', 'tata@gmail.com', '9787456544', (SELECT ENCODE(DIGEST('1238', 'sha512'), 'hex')))


INSERT INTO tb_user VALUES ('f051a0ab-5d4e-41e4-967d-2827d948d57a', '$2a$10$2KeflGXrfayDYOZlNzSrgeRTG/26lwjiuKAhsZxAk2lkPjLuZlNaG', 'maria')
INSERT INTO tb_user VALUES ('05efdfb1-e1b9-4f09-8abc-968905db6b11', '$2a$10$2KeflGXrfayDYOZlNzSrgeRTG/26lwjiuKAhsZxAk2lkPjLuZlNaG', 'joao')																									|
                                    	UUID													PASSWORD ENCODE = senha123
!J------------------------------------------------------------------------------------------------------------------------------J!

#                  Application.java --> (Simula o arquivo import.sql na busca de livros no banco de dados)

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
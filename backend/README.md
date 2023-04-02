# Project Running in
                                        * ================================ *
                                        *  Java 17                         *
                                        *  Node v18.14.1                   *
                                        *  apache-maven 3.9.0              *
                                        *  git version 2.39.2.windows.1    *
                                        * ================================ *

# POST
	    ==>  ⚡	http://localhost:8080/rest/user/authenticate                                                              - ❐ ❌

        {
        "name": "test@admin.com",
        "authorities": [
          "ROLE_ADMIN",
          "ROLE_USER"
        ],
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QGFkbWluLmNvbSIsImF1dGgiOnsibmFtZSI6IkFETUlOIn0sImlhdCI6MTY2NjYzNTk3MywiZXhwIjoxNjY2NjM2MTUzfQ.q6D8TSHmYeZ9O2iAkAquRt9431wq5MUaa5AtLRPqw51puUrGGqxzl6KSVpX_L3JPKCVSI3SrKvUO5aCgmcyy0Q"
        }																	                            |
													                    Http Headers            |
																			                                |
								          🔑 Authorization        ✔️			        value: 🔒

>					         Using generated security password: 27b35cb3-51e6-46e5-b74e-42faa8e458d7

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

# Local Frontend                                                        # Local Backend

     📁 cd C:\Library-Vite\frontend                                          📁 cd C:\Library-Vite\backend

        yarn install 📦                                                         mvn install 📦
        yarn audit fix
        yarn upgrade
        yarn dev

# GitHub

		    ==>	🐙	git commit -m "funcoes e recursos para projetos futuro"                   ⓕ https://facebook.com/naldo-luis-568

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

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

# GET
    http://localhost:8080/rest/books --> Busca Paginada  http://localhost:8080/rest/books?pageNumber=1&pageSize=5&sortBy=price&sortDir=asc

                                     --> Busca Paginada in DTO http://localhost:8080/rest/books?size=7&page=5

                                     --> Search Filter http://localhost:8080/rest/books/search/English?page=0&size=5
                                                                                                  |
                                                                                               Science 🧪

!J------------------------------------------------------------------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
# GET By ID
  		    ==> ⚡	http://localhost:8080/rest/books/1

# PATCH
	        ==> ⚡ http://localhost:8080/rest/books/61

# POST
	        ==> ⚡	http://localhost:8080/rest/books

# PUT
        	==> ⚡	http://localhost:8080/rest/books/3

# DELETE
		      ==> ⚡	http://localhost:8080/rest/books/1

# Byte QR Code
		      ==> ⚡	http://localhost:8080/rest/books/generateByteQRCode/24

# Image QR Code
		      ==> ⚡	http://localhost:8080/rest/books/generateImageQRCode/27

!J------------------------------------------------------------------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
# Requests

📕
      {
          "title": "Spring in Action",
          "author": "Craig Walls",
          "photo": "https://images-na.ssl-images-amazon.com/images/I/51gHy16h5TL.jpg",
          "isbn": 935119797,
          "price": 630,
          "genre": "Fantasy",
          "language": "English"
      }
📒
      {
          "title": "Java Persistence with Hibernate",
          "author": "Christian Bauer and Gavin King",
          "photo": "https://images.manning.com/720/960/resize/book/d/2ea186d-c683-4d54-95f9-cca25b6fe49e/bauer2.png",
          "isbn": 951199193,
          "price": 771,
          "genre": "Biography",
          "language": "English"
      }
📗
      {
          "title": "Grails in Action",
          "author": "Glen Smith and Peter Ledbrook",
          "photo": "https://images.manning.com/720/960/resize/book/6/3e9d5ed-4155-466d-ab46-538bb355948d/gsmith2.png",
          "isbn": 167290963,
          "price": 907,
          "genre": "Technology",
          "language": "English"
      }
📙
      {
          "title": "Spring Boot in Action",
          "author": "Craig Walls",
          "photo": "https://images.manning.com/720/960/resize/book/6/bb80688-f898-4df7-838a-253b1de123c4/Walls-SpringBoot-HI.png",
          "isbn": 117292540,
          "price": 149,
          "genre": "Science",
          "language": "English"
      }
📘
      {
          "title": "Head First Java: A Brain-Friendly Guide",
          "author": "Kathy Sierra",
          "photo": "https://covers.oreillystatic.com/images/9780596004651/lrg.jpg",
          "isbn": 873666024,
          "price": 498,
          "genre": "Romance",
          "language": "English"
      }
📔
      {
          "title": "Cloud Native",
          "author": "Cornelia Davis",
          "photo": "https://m.media-amazon.com/images/I/71bUthRlRhL.jpg",
          "isbn": 873666024,
          "price": 875,
          "genre": "Technology",
          "language": "English"
      }

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\💬\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

📕
      {
          "title": "Microservices",
          "author": "Chris Richardson",
          "photo": "https://m.media-amazon.com/images/I/71eY7tYDS4L.jpg",
          "isbn": 873666024,
          "price": 668,
          "genre": "Technology",
          "language": "English"
      }
📒
      {
          "title": "Microservices",
          "author": "Morgan Bruce",
          "photo": "https://images.manning.com/book/8/809fab1-8912-4fb7-b39e-f49844525807/Bruce-Microservices-HI.png",
          "isbn": 873666024,
          "price": 748,
          "genre": "Technology",
          "language": "English"
      }
📗
      {
          "title": "Microservices in.Net",
          "author": "Christian Horsdal",
          "photo": "https://images.manning.com/book/e/65fff7e-bc06-44d4-b4bd-9dd311a8d135/Horsdal-Microservices-2ed-HI.png",
          "isbn": 873666024,
          "price": 753,
          "genre": "Technology",
          "language": "English"
      }
📙
      {
          "title": "Bootstrapping Microservices",
          "author": "Ashley Davis",
          "photo": "https://images.manning.com/book/8/b060324-0567-4c7b-b918-de2cf83d52ff/Davis-BM-HI.png",
          "isbn": 873666024,
          "price": 235,
          "genre": "Technology",
          "language": "English"
      }
📘
      {
          "title": "Unity in Action",
          "author": "Joseph Hocking",
          "photo": "https://images.thuvienpdf.com/RdadOzRvJb.webp",
          "isbn": 873666024,
          "price": 645,
          "genre": "Technology",
          "language": "English"
      }

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\💬\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

📕
      {
          "title": "Enterprise OSGI",
          "author": "Holly Cummins",
          "photo": "https://images.manning.com/264/352/resize/book/7/00b638e-84a6-44b2-b051-6f15469be9ab/cummins.png",
          "isbn": 873666024,
          "price": 643,
          "genre": "Technology",
          "language": "English"
      }
📒
      {
          "title": "AspectJ in Action",
          "author": "Ramnivas Laddad",
          "photo": "https://images.manning.com/264/352/resize/book/f/f1d0a0c-4575-4a6a-a282-afa7a5105429/laddad2.png",
          "isbn": 873666024,
          "price": 469,
          "genre": "Technology",
          "language": "English"
      }
📗
      {
          "title": "HTTP/2",
          "author": "Barry Pollard",
          "photo": "https://images.manning.com/book/b/2327043-8f05-4151-8320-dcc0294714c6/Pollard-HTTP-HI.png",
          "isbn": 873666024,
          "price": 775,
          "genre": "Technology",
          "language": "English"
      }
📙
      {
          "title": "AWS Lambda",
          "author": "Danilo Poccia",
          "photo": "https://images.manning.com/264/352/resize/book/0/f99ea3b-916a-4f20-a66d-d086ee0b27f2/Poccia-AWSL-HI.png",
          "isbn": 873666024,
          "price": 235,
          "genre": "Technology",
          "language": "English"
      }
📘
      {
          "title": "Google Cloud",
          "author": "JJ Geewax",
          "photo": "https://m.media-amazon.com/images/I/61J6t27YllL.jpg",
          "isbn": 873666024,
          "price": 575,
          "genre": "Technology",
          "language": "English"
      }

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
											                          !J ⭐ BACKEND ⭐ !J
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

# API test

>                     https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

!J------------------------------------------------------------------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
# requests.js

export const BASE_URL = import.meta.env.VITE_BACKEND_URL

>// 💡 --> Quando em produção, não é necessário o " ?? 'http://localhost:8080/rest' "

!J------------------------------------------------------------------------------------------------------------------------------J
                                                                                                                          - ❐ ❌
# import.sql
								             EXEMPLO DE COMO EDITAR NO BANCO DE DADOS (POSTGRES 🛢)

                    update tb_book set title = 'new name of title' where id = 20						  X = número do id
                      			 |			 	   |               |					          |							  Y = set o tipo de atributo a editar
                             |			 	   |			         |                    |					      J = nome da tabela
                             J			     Y				       N                    X			          N = nome do título a editar

                                                                                  💬
								                OPÇÕES DE ATRIBUTOS A EDITAR DO ARQUIVO BOOK.java			

                                      private String title;       ==>	title
                                      private String author;		  ==>	author
                                      private String photo;       ==>	photo
                                      private Long isbn;			    ==>	isbn
                                      private Double price;		    ==>	price
                                      private String language;	  ==> language
                                      private String genre;		    ==>	genre

<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><!><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

System.out.println(new BCryptPasswordEncoder().encode("????"));
                                                          \
>                                                           gera uma senha encode que você pode acompanhar pelo console

                                    [✔️] import.sql + [Application.java method 2]

INSERT INTO tb_user(name, email, mobile, password, role_id) VALUES ('Test Admin', 'test@admin.com', '25032019200', '$2a$10$VLc6qbT.0npkJQBarvY7LOgTFou0U2KhCXRRYeQnkCmvfLz7ro7gK', 2)

INSERT INTO tb_user(name, email, mobile, password, role_id) VALUES ('Test User', 'test@user.com', '25032019200', '$2a$10$Yz5kYsZMwuy/2WeuZidE0.hdqftuPa.4wE09b1zjLU.fej8RiQ9Da', 1)

INSERT INTO tb_role(name) VALUES ('ADMIN')
INSERT INTO tb_role(name) VALUES ('USER')
_________________________________________________________,
INSERT INTO tb_role VALUES (gen_random_uuid(), 'ADMIN')  |
INSERT INTO tb_role VALUES (gen_random_uuid(), 'USER')   |
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨`
[\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\]

INSERT INTO tb_user(name, email, mobile, password) VALUES ('Maria', 'maria@gmail.com', '9787456540', '123')
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Joao', 'joao@gmail.com', '9787456541', '123')
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Cida ❤', 'cida@gmail.com', '9787456542', '123')
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Natalia', 'natalia@gmail.com', '9787456543', '123')
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Talita', 'tata@gmail.com', '9787456544', '123')
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Amanda', 'amanda@gmail.com', '9787456541', '123')

INSERT INTO tb_user VALUES ('f051a0ab-5d4e-41e4-967d-2827d948d57a', '$2a$10$2KeflGXrfayDYOZlNzSrgeRTG/26lwjiuKAhsZxAk2lkPjLuZlNaG', 'maria')
INSERT INTO tb_user VALUES ('05efdfb1-e1b9-4f09-8abc-968905db6b11', '$2a$10$2KeflGXrfayDYOZlNzSrgeRTG/26lwjiuKAhsZxAk2lkPjLuZlNaG', 'joao')																 🔑									                 🔓  |
                                    	UUID													PASSWORD ENCODE = senha123
!J------------------------------------------------------------------------------------------------------------------------------J!
                                          \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
										                      https://www.uuidgenerator.net/
                                          //////////////////////////////
# UUID 30/30

   3c00a8ba-4e5a-491e-8248-07d6f15dff97									  			              c0f5385b-53af-4e41-be70-fdfe5d565b63
>  3a557f92-714f-4bab-bb72-52dd134d8fbd									  			              f60b509c-c0ad-4ad6-ae8e-e53bb6641257
  [2919470f-723d-44f3-b464-55cea717a0d4]									  			           [919fe1d5-1096-4bb4-8b28-66dfa7662cf2]
   f384497f-9f52-4a74-aa9b-ec408a34c55c									  			              f2523aaa-c67d-4d24-9202-6f8299d82483
>  e7acfb0a-301c-4a9b-9e38-55f2521c6d0e									  			              bb07835d-8511-43aa-8406-d0de8790fe9a
  [718dc1f1-3820-4c0e-af2b-3184275af00b]									  			           [e64ba0d7-08af-403e-9c77-d451aa2439fa]
   27a72453-f4e9-4730-a181-4045645fae0e									  			              a483a417-3bd0-440b-8b1f-ef6e72cf50e8
>  72e920c1-81b2-4f58-a394-41ed73547b7c									  			              7f5e790b-9dd4-460f-8193-5b28871ed9a4
  [cc3b55fd-8dc0-43ac-80b2-60f007fc3bcc]									  			           [b3b459be-d5f0-4ef8-b865-777fd8dff5f2]
   82beedcf-31ff-4ea4-8dd8-fda806d841fe									  			              bf078f48-0d88-49d4-8ef6-a004432958f4
>  f4cf4a4e-f8d4-42ab-82da-8fdd43e6c6e0									  			              a9042cce-e707-4a12-b2ef-3f0335b27d4f
  [829decd3-0619-42cf-a025-b56631a7315d]									  			           [606ba0c7-81aa-4ffe-9560-ee6654c53a98]
   c0130cfa-e655-470b-8f17-37fb17de5943									  			              7a494768-9201-491d-8a73-5591cccc9d31
>  b2a298c0-b272-481b-accc-16b322cbe13c									  			              2cd754e2-419d-4518-b54e-b016160906b6
  [7c6e251b-2033-4edc-b9c9-93d4a1f363af]									  			           [953be8ef-4b9a-40d1-8893-a202650f1da6]
   1dcb5337-3ce4-4522-8a6b-0824e8ef610a									  			              27c1df25-3126-4014-87ef-7eb3cda18216
>  fced1d3b-31b0-4629-ac11-5466d7018ba3									  			              6e7d7a6e-735a-4b16-a008-45821761af45
  [6dd38b93-84a2-4375-ba13-b6c47845dffa]									  			           [65532a03-fe1d-4ab6-b615-0e43a63fea8e]
   d90ed2ea-64b4-412a-a724-1b2503689a5a									  			              cb3294a9-1d68-4f40-bca0-a4f9a6f5a634
>  8ba73169-6155-4ea2-95d4-93fa09582e69									  			              d1fd28ff-1a1b-4116-b1d9-df73a394cdcd
  [2ccdb31f-c2d9-4b89-b250-e35958220878]									  			           [964e16a8-a9e2-403f-989f-9fc57cd94057]
   fe758107-6d24-41eb-bfcf-77452fc04f40									  			              1b9c349e-d700-4cdc-a4fa-5757faf08457
>  d3bed3ec-cb52-4cf3-b177-1709c7454913									  			              eaebd1c1-0cf0-4342-be3a-d57f0345f0cc	
  [2d036269-ead3-4e2a-87bb-fd84684d6a3c]									  			           [f302da38-70b7-4c2d-8161-f3105fa6d8e6]
   a50ada16-0e65-4992-8428-bd0a5232ab35									  			              adcaa3ec-c155-40d9-8b35-4b62b15e3b39
>  a5a9bf34-3c57-43d9-a678-8f1287d3f85f									  			              525a3bc8-79ba-4998-ad4f-d2d07abd8a1a
  [5ae72db7-8e0a-44e2-8c5f-168996752f2a]									  			           [2123491d-83f4-4b0c-94bd-527661f05ef6]
   17fa055e-b284-4971-9716-8d76e6a5748b									  			              a6015850-7bfe-4cd3-a3e4-8c5d5a6666ea
>  89c0013c-c7e1-4f5d-9e9d-c8e13e57546e									  			              0e7a8d96-5798-44c9-9301-2a7514766083
  [8f91a7a1-a717-4d9a-b32e-81a2e5813ad9]									  			           [ebc82e44-c21a-4ada-8ea1-c0545deef6bb]

!J---------------------------------------------------------⚠️-------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
#           		 Application.java --> (Simula o arquivo import.sql na busca de livros no banco de dados) 

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

!J---------------------------------------------------------⚠️-------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
# Application.java method 2

package com.library.naldo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}

!J---------------------------------------------------------⚠️-------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
# BookService with DTO

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.library.naldo.domain.Book;
import com.library.naldo.dto.BookDTO;
import com.library.naldo.repository.BookRepository;
import com.library.naldo.service.impl.IServiceBook;

@Service
public class BookService implements IServiceBook<Book> {

	@Autowired
	private BookRepository bookRepository;

	@Transactional(readOnly = true)
	public Page<BookDTO> findAll(Pageable pageable) {
		Page<Book> result = bookRepository.findAll(pageable);
		Page<BookDTO> page = result.map(b -> new BookDTO(b));
		return page;
	}

	@Transactional(readOnly = true)
	public BookDTO findById(Long id) {
		Book result = bookRepository.findById(id).get();
		BookDTO dto = new BookDTO(result);
		return dto;
	}

	@Override
	public Book saveOrUpdate(Book book) {
		return bookRepository.save(book);
	}

	@Override
	public String deleteById(Long id) {
		JSONObject jsonObject = new JSONObject();
		try {
			bookRepository.deleteById(id);
			jsonObject.put("message", "Book deleted successfully");
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();
	}
}

# IServiceBook of DTO

package com.library.naldo.service.impl;

public interface IServiceBook<T> {
	String deleteById(Long id);
	T saveOrUpdate(T t);
}

!J---------------------------------------------------------⚠️-------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
# BookDTO

package com.library.naldo.dto;

import com.library.naldo.domain.Book;
import lombok.Data;

@Data
public class BookDTO {

  private Long id;
	private String title;
	private String author;
	private String photo;
	private Long isbn;
	private Double price;
	private String language;
	private String genre;

    public BookDTO(Book book) {
        id = book.getId();
        title = book.getTitle();
        author = book.getAuthor();
        photo = book.getPhoto();
        isbn = book.getIsbn();
        price = book.getPrice();
        language = book.getLanguage();
        genre = book.getGenre();
    }
}

!J------------------------------------------------------------------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
# Spring Security Config (v2.6.7)

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

!J---------------------------------------------------------⚠️-------------------------------------------------------------------J!
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.0.0)

>										  	                            * [UPDATE] *

# SpringSecurityConfig (FilterChain)

package com.library.naldo.config;

import java.util.Arrays;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.headers().frameOptions().disable();
		http.cors().and().csrf().disable();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.authorizeHttpRequests((auth) -> auth.anyRequest().permitAll());
		return http.build();
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

# pom.xml

			<plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-resources-plugin</artifactId>
          <version>3.1.0</version>
      </plugin>

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
											                           !J ⭐ FRONTEND ⭐ !J
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                                                                                                                          - ❐ ❌
# Fonts index.css
                   @import "https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cerulean/bootstrap.min.css";
                   @import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
                   @import "https://fonts.googleapis.com/css?family=Roboto|Varela+Round";

# Fonts index.html

>                  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">

>                  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

# html

<link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"/>
<link rel="icon" href="https://www.pngkey.com/png/full/110-1108637_free-png-stack-of-beautiful-books-png-images.png"/>

# Bootstrap
                       https://react-bootstrap.github.io/components/pagination/

# Editor Photo
                       https://www.fotor.com/photo-editor-app/editor/cloud

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                                                                                                                          - ❐ ❌
# book

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faList, faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons'
import { fetchBook, fetchGenres, fetchLanguages, saveBook, updateBook } from '../../services'
import MyToast from '../MyToast'
import iconCam from '../../assets/camera.png'
import iconLang from '../../assets/language.png'

class Book extends React.Component {
  constructor() {
    super()
    this.state = this.initialState
    this.state = {
      genres: [],
      languages: [],
      show: false
    }
  }

  initialState = { id: "", title: "", author: "", photo: "", isbn: "", price: "", language: "", genre: "" }

  componentDidMount() {
    const bookId = this.props.id
    if(bookId) {
     this.findBookById(bookId)
   }
    this.findAllLanguages()
 }

  findAllLanguages = () => {
    this.props.fetchLanguages()
    setTimeout(() => {
      let bookLanguages = this.props.bookObject.languages
      if (bookLanguages) {
        this.setState({
          languages: [{ value: "", display: "Select Language" }].concat(
            bookLanguages.map(language => {
              return { value: language, display: language }
           }))
        })
        this.findAllGenres()
      }
    }, 100)
  }

  findAllGenres = () => {
    this.props.fetchGenres()
    setTimeout(() => {
      let bookGenres = this.props.bookObject.genres
      if (bookGenres) {
        this.setState({
          genres: [{ value: "", display: "Select Genre" }].concat(
            bookGenres.map(genre => {
              return { value: genre, display: genre }
           }))
        })
      }
    }, 100)
  }

  findBookById = bookId => {
    this.props.fetchBook(bookId)
    setTimeout(() => {
      let book = this.props.bookObject.book
      if (book != null) {
        this.setState({
          id: book.id,
          title: book.title,
          author: book.author,
          photo: book.photo,
          isbn: book.isbn,
          price: book.price,
          language: book.languages,
          genre: book.genres
        })
      }
    }, 1000)
  }

  resetBook = () => {
    this.setState(() => this.initialState)
  }

  submitBook = event => {
    event.preventDefault()

    const bookSaved = {
      title: this.state.title,
      author: this.state.author,
      photo: this.state.photo,
      isbn: this.state.isbn,
      price: this.state.price,
      language: this.state.languages,
      genre: this.state.genres
    }

    this.props.saveBook(bookSaved)
    setTimeout(() => {
      if (this.props.bookObject.book != null) {
        this.setState({ show: true, method: "post" })
        setTimeout(() => this.setState({ show: false }), 2300)
      } else {
        this.setState({ show: false })
      }
    }, 2000)
    this.setState(this.initialState)
  }

  updatedBook = event => {
    event.preventDefault()

    const bookEdit = {
      id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      photo: this.state.photo,
      isbn: this.state.isbn,
      price: this.state.price,
      language: this.state.languages,
      genre: this.state.genres
    }

    this.props.updateBook(bookEdit)
    setTimeout(() => {
      if (this.props.bookObject.book != null) {
        this.setState({ show: true, method: "put" })
        setTimeout(() => this.setState({ show: false }), 2300)
      } else {
        this.setState({ show: false })
      }
    }, 2000)
    this.setState(this.initialState)
  }

  bookChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { title, author, photo, isbn, price, language, genre } = this.state

    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            message={this.state.method === "put" ? "Book Updated Successfully." : "Book Saved Successfully."}
            type="success"
          />
        </div>
        <Card className="border-secondary bg-dark text-white">
          <Card.Header>
            <FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare}/>{" "}
            {this.state.id ? "Update Book" : "Add New Book"}
          </Card.Header>
          <Form
            onReset={this.resetBook}
            onSubmit={this.state.id ? this.updatedBook : this.submitBook}
            id="bookFormId"
          >
            <Card.Body>
            <div className="form-row">
                <Form.Group as={Col}>
                  <Form.Label>Title 📙</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    required
                    name="title"
                    pattern="[A-Za-záàâãäéèêëíïîóôõöúùûüýÿřšşćçñžÁÀÂÃÄÉÈÊËÍÏÎÓÔÕÖÚÙÛÜÝŸŘŠŞĆÇÑŽ'/. ]{1,25}"
                    maxLength={25}
                    value={title ||''}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
                    placeholder="Enter Book Title"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Author ✏️</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    required
                    name="author"
                    pattern="[A-Za-záàâãäéèêëíïîóôõöúùûüýÿřšşćçñžÁÀÂÃÄÉÈÊËÍÏÎÓÔÕÖÚÙÛÜÝŸŘŠŞĆÇÑŽ'. ]{2,25}"
                    maxLength={25}
                    value={author ||''}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white mb-3"
                    placeholder="Enter Book Author"
                  />
                </Form.Group>
                </div>
                <div className="form-row">
                <Form.Group as={Col}>
                  <Form.Label>Cover Photo URL <img className="cam" src={iconCam}/></Form.Label>
                  <div className="input-group">
                    <Form.Control
                      autoComplete="off"
                      required
                      name="photo"
                      value={photo ||''}
                      onChange={bookChange}
                      className="bg-dark border-secondary text-white"
                      placeholder="Enter Book Cover Photo URL"
                    />
                    <div>
                      {this.state.photo !== "" && (
                        <img src={this.state.photo} width="38" height="38"/>
                      )}
                    </div>
                  </div>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>ISBN Number ▥</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    required
                    name="isbn"
                    pattern="[0-9]{9}"
                    maxLength={9}
                    value={isbn ||''}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white mb-3"
                    placeholder="Enter Book ISBN Number [123456789]"
                  />
                </Form.Group>
                </div>
                <div className="form-row">
                <Form.Group as={Col} controlId="formGridPrice">
                  <Form.Label className="price">Price 💲</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    required
                    name="price"
                    pattern="[0-9]{2,3}.[0-9]{2}"
                    maxLength={6}
                    value={price ||''}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
                    placeholder="Enter Book Price Ex: 123.45"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Language <img className="lang" src={iconLang}/></Form.Label>
                  <Form.Control
                    required
                    as="select"
                    custom="true"
                    name="language"
                    value={language}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
                  >
                    {this.state.languages.map(language => (
                      <option key={language.value} value={language.value}>
                        {language.display}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Genre 📚</Form.Label>
                  <Form.Control
                    required
                    as="select"
                    custom="true"
                    name="genre"
                    value={genre}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
                  >
                    {this.state.genres.map(genre => (
                      <option key={genre.value} value={genre.value}>
                        {genre.display}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </div>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button size="sm" variant="success" type="submit">
                <FontAwesomeIcon icon={faSave}/>{" "}
                {this.state.id ? "Update" : "Save"}
              </Button>{" "}
              <Button size="sm" variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo}/> Reset
              </Button>{" "}
              <Link style={{ textDecoration: 'none' }}
                type="button" className="link" to="/list">
                <FontAwesomeIcon icon={faList}/> Book List
              </Link>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    )}}

const mapStateToProps = state => {
  return {
    bookObject: state.book
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveBook: book => dispatch(saveBook(book)),
    fetchBook: bookId => dispatch(fetchBook(bookId)),
    updateBook: book => dispatch(updateBook(book)),
    fetchLanguages: () => dispatch(fetchLanguages()),
    fetchGenres: () => dispatch(fetchGenres())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Book)

!J---------------------------------------------------------⚠️-------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
const bookChange = e => {
    const { name, value } = e.target
    setBooks({ ...books, fields: {...books.fields, [name]: {stringValue: value }}})
  }

import { useParams } from 'react-router-dom'
import Book from './Book'

export default function BookParams() {
  const params = useParams()
  return <Book bookId={`${params.bookId}`}/>
}

findAllBooks(currentPage) {
    currentPage -= 1
    axios(`${BASE_URL}/books?pageNumber=` + currentPage + "&pageSize=" + this.state.booksPerPage + "&sortBy=price&sortDir=" + this.state.sortDir)
      .then(response => response.data)
      .then(data => {
        this.setState({
          books: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1
        })
      })
      .catch(error => {
        console.log(error)
        localStorage.removeItem("jwtToken")
     })
  }

!J---------------------------------------------------------⚠️-------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
# Login

  return (
    <div className="justify-content-md-center form-row">
      <Col xs={5}>
        {show && props.message && (
          <Alert variant="success" onClose={() => setShow(true)} dismissible>
            {props.message}
          </Alert>
        )}

!J---------------------------------------------------------⚠️-------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
# form

Data:
<input type="date" required="required" maxlength="10" name="date" pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" min="2012-01-01" max="2014-02-18"/>

Telefone:
<input type="tel" required="required" maxlength="15" name="phone" pattern="[0-9]{2}-[0-9]{4,6}-[0-9]{3,4}$"/>

Hora:
<input type="time" required="required" maxlength="8" name="hour" pattern="[0-9]{2}:[0-9]{2} [0-9]{2}$"/>

E-mail:
<input type="email" required="required" class="input-text" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>

!J------------------------------------------------------------------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
# Home

import { Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import authToken from '../utils/authToken'

import { useState } from 'react' //---->
import ModalCustom from './ModalCustom'//---->

export default function Home() {
  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken)
  }

  const auth = useSelector(state => state.auth)
  const [modalShow, setModalShow] = useState(false) //---->

  return (
    <>
    <Alert style={{ background: "#343A40", color: "#fff", fontSize: "30px", fontWeight: "bold", fontFamily: "sans-serif" }}>
      Welcome to Book Shop <b style={{ color: "#f5d20c", fontSize: "24px", fontWeight: "600" }}>{auth.username}</b>
      <p className='title-home'>Good friends, good books, nutrition, and a sleepy conscience: this is the ideal life.</p>
      <p className='title-home'>-- Mark Twain</p>
    </Alert>

{/* //--------------------------------------------------------------------------> */}
    <button style={{ borderRadius: "5px", fontFamily: "sans-serif", border: "3px solid #6b5795", background: "#343A40", color: "#fff" }} onClick={() => setModalShow(true)}>Open</button>
     <ModalCustom
        show={modalShow}
        onHide={() => setModalShow(false)}/>
      {/* //--------------------------------------------------------------------------> */}
  </>
)}

    this.state = {
      books: [],
      currentPage: 1,
      booksPerPage: 8,
      modalShow: false
    }
  }

  setModalShow = visible => {
    this.setState({ modalShow: visible })
  }

  render() {
    const { books, currentPage, modalShow, totalPages } = this.state

!J------------------------------------------------------------------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
# App

  window.onbeforeunload = event => {
    const e = event || window.event
    e.preventDefault()
    if (e) {
      e.returnValue = ""
    }
    return ""
  }

!J------------------------------------------------------------------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
# UserList

                  <InputGroup size="sm">
                      <Button
                        className="first bg-warning text-dark"
                        size="sm"
                        variant="outline-warning"
                        disabled={currentPage === 1 ? true : false}
                        onClick={this.firstPage}
                      >
                        <FontAwesomeIcon icon={faFastBackward}/> First
                      </Button>
                      <Button
                        className="prev bg-success text-light"
                        size="sm"
                        variant="outline-success"
                        disabled={currentPage === 1 ? true : false}
                        onClick={this.prevPage}
                      >
                        <FontAwesomeIcon icon={faStepBackward}/> Prev
                      </Button>
                    <FormControl
                      size="sm"
                      className="border-secondary text-white page-num bg-dark"
                      value={currentPage}
                      onChange={this.changePage}
                    />
                      <Button
                        className="next bg-success text-light"
                        size="sm"
                        variant="outline-success"
                        disabled={currentPage === totalPages ? true : false}
                        onClick={this.nextPage}
                      >
                        <FontAwesomeIcon icon={faStepForward}/> Next
                      </Button>
                      <Button
                        className="last bg-warning text-dark"
                        size="sm"
                        variant="outline-warning"
                        disabled={currentPage === totalPages ? true : false}
                        onClick={this.lastPage}
                      >
                        <FontAwesomeIcon icon={faFastForward}/> Last
                      </Button>
                  </InputGroup>
                </div>
              </Card.Footer>
            ) : null}
          </Card>
        )}
      </div>
    )}}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)

# Css

.page-num {width: 50px !important;height: 28px !important}
.arrow {width: 0;height: 0;margin-top: 5px;border-left: 5px solid transparent;border-right: 5px solid transparent;display: inline-block}
.arrow-up {border-bottom: 10px solid}
.arrow-down {border-top: 10px solid}
.title-home {font-size: 13.5px;font-weight: 400;font-family: 'Segoe UI', sans-serif;padding-top: 5px}

.first,.prev {margin: -.4px 4px 0 0;font-family: 'Varela Round';height: 29px}
.next,.last {margin: -.4px 0 0 4px;font-family: 'Varela Round';height: 29px}

.next-page {margin-left: 20px;color:#ffb742}
.prev-page {margin-right: 20px;transform: rotate(180deg);color:#70ff8e}
.prev-fast {transform: rotate(180deg);margin-right: 20px;color:#8aecff}
.next-fast {margin-left: 20px;color:#ff5842}

.next-page,.prev-page,.prev-fast,.next-fast {transition: all ease .17s;font-size: 23px;margin-top: -2.7px}
.next-page:hover,.prev-page:hover,.prev-fast:hover,.next-fast:hover {filter: drop-shadow(0 0 .085em)}

.lang {width: 20px}
.cam {width: 16px;margin-top: -5px}

.next-page,.prev-page,.prev-fast,.next-fast,.speedometer,.clock {cursor: pointer}

.arrow-up,.arrow-down,.link:hover,.link,.card-title,.clock:hover,.card-desc {color: #fff}

.card-title,.link,.table-title,.page-num {text-align: center}

.input-password,.input-email,.input-name,.input-phone {margin: 9px 9px}
.lock,.envelope,.name,.phone {margin-top: 12px;width: 40px}

.link {background: #b00fd0;border-radius: 3px;width: 90px;height: 31.3px;padding-top: 4.5px;font-size: 14px}
.link:hover {background: #9f0ebc}

.table-title {font-size: 14.1px;color: #bebcbc;font-family: 'Varela Round'}
.table-content {font-size: 13.7px}

.purchase-button {font-size: 12px;margin: 7px 0 0 50px;height: 25px;width: 90px;color: #333;background: #bbbe10;font-weight: 500;border-radius: .3rem}
.purchase-button:hover {background: #abd727}

.card-photo {width: 77px;margin: 44px 0 0 56.5px;border-radius: 3%}
.card-title {margin: 7px 62px 0 0;font-size: 13px}
.card-desc {font-size: 12px;margin: -9px 0 0 65px}

.clock {transform: scale(.92);transition: all ease .2s}
.clock:hover,.speedometer:hover {transform: scale(1);filter: drop-shadow(0 0 .05em)}

.speedometer {transform: scale(.97);transition: all ease .2s}
.speedometer:hover {color: #abd727}

::-webkit-scrollbar {width: 5px}
::-webkit-scrollbar-track {background: #606060}
::-webkit-scrollbar-thumb {background: #bebebe}

!J------------------------------------------------------------------------------------------------------------------------------J!
                                                                                                                          - ❐ ❌
# Captcha Vanilla

  // document.querySelector() é usado para selecionar um elemento do documento usando seu ID
  let captchaText = document.querySelector('#captcha')
  var ctx = captchaText.getContext("2d")
  ctx.font = "30px Roboto"
  ctx.fillStyle = "#08e5ff"

  let userText = document.querySelector('#textBox')
  let submitButton = document.querySelector('#submitButton')
  let output = document.querySelector('#output')
  let refreshButton = document.querySelector('#refreshButton')

  // alphaNums contém os caracteres com os quais você deseja criar o CAPTCHA
  let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
  'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4',
  '5', '6', '7', '8', '9']
  let emptyArr = []

  // Este loop gera uma string aleatória de 7 caracteres usando alphaNums
  // Além disso, esta string é exibida como um CAPTCHA
  for (let i = 1; i <= 7; i++) {
      emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)])
  }
  var c = emptyArr.join('')
  ctx.fillText(emptyArr.join(''),captchaText.width/4, captchaText.height/2)

  // Este ouvinte de evento é estimulado sempre que o usuário pressiona o botão "Enter"
  // "Correto!" ou a mensagem "Incorreto, tente novamente" é
  // exibido após validar o texto de entrada com CAPTCHA
  userText.addEventListener('keyup', function(e) {
    // Key Code Value of "Enter" Button is 13
      if (e.keyCode === 13) {
          if (userText.value === c) {
              output.classList.add("correctCaptcha")
              output.innerHTML = "Correto!"
          } else {
              output.classList.add("incorrectCaptcha")
              output.innerHTML = "Incorreto, tente novamente"
          }
      }
  })

  // Este ouvinte de evento é estimulado sempre que o usuário clica no botão "Enviar"
  // "Correto!" ou a mensagem "Incorreto, tente novamente" é
  // exibido após validar o texto de entrada com CAPTCHA
  submitButton.addEventListener('click', function() {
      if (userText.value === c) {
          output.classList.add("correctCaptcha")
          output.innerHTML = "Correto!"
      } else {
          output.classList.add("incorrectCaptcha")
          output.innerHTML = "Incorreto, tente novamente"
      }
  })

  // Este ouvinte de evento é estimulado sempre que o usuário pressiona o botão "Atualizar"
  // Um novo CAPTCHA aleatório é gerado e exibido após o usuário clicar no botão "Atualizar"
  refreshButton.addEventListener('click', function() {
      userText.value = ""
      let refreshArr = []
      for (let j = 1; j <= 7; j++) {
          refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)])
      }
      ctx.clearRect(0, 0, captchaText.width, captchaText.height)
      c = refreshArr.join('')
      ctx.fillText(refreshArr.join(''),captchaText.width/4, captchaText.height/2)
      output.innerHTML = ""
  })

# Captcha html

                <div className="center">
                  <h1 id="captchaHeading"></h1>
                  <div id="captchaBackground">
                    <canvas id="captcha">captcha text</canvas>
                      <input id="textBox" type="text" name="text"/>
                      <div id="buttons">
                        <input id="submitButton" type="submit"/>
                        <button id="refreshButton" type="submit">Atualizar</button>
                      </div>
                    <span id="output"></span>
                  </div>
                </div>

# Captcha css

#captchaBackground {height: 220px;width: 250px;background: #343a40;display: flex;align-items: center;justify-content: center;flex-direction: column}
#captchaHeading {color: white}
#captcha {height: 80%;width: 80%;font-size: 30px;letter-spacing: 3px;margin: auto;display: block;top: 0;bottom: 0;left: 0;right: 0}
#submitButton {margin-top: 2em;margin-bottom: 2em;background: #149d1b;border: 0;font-weight: bold}
#refreshButton {background: #22af24;border: 0;font-weight: bold}
#textBox {height: 25px}
.center {display: flex;flex-direction: column;align-items: center}
.incorrectCaptcha {color: #FF0000}
.correctCaptcha {color: #7FFF00}

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
											  	                         !J ⚙️ CONFIG 🔧 !J
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                                                                                                                          - ❐ ❌
# ts.config.json

{"compilerOptions": {
"baseUrl": "./src",
"target": "ESNext",
"useDefineForClassFields": true,
"lib": ["DOM","DOM.Iterable","ESNext"],
"skipLibCheck": true,
"allowSyntheticDefaultImports": true,
"forceConsistentCasingInFileNames": true,
"module": "ESNext",
"moduleResolution": "Node",
"resolveJsonModule": true,
"isolatedModules": true,
"noEmit": true,
"jsx": "react-jsx"},"include": ["src"],"references": [{"path": "./tsconfig.node.json"}]}

# tsconfig.node.json

{"compilerOptions": {
"composite": true,
"module": "ESNext",
"moduleResolution": "Node",
"allowSyntheticDefaultImports": true
},"include": ["vite.config.ts"]}

# server.js

import cors from 'cors'

app.use(cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))

!J------------------------------------------------------------------------------------------------------------------------------J!

[React_Carousel]:

>Nome	                       Valor	                Propriedade utilizada para
as	                           –	              Definir um elemento para esse componente. Esse elemento pode ser personalizado.
activeIndex	                   –	              Controlar o slide carregado inicialmente na estrutura.
defaultActiveIndex	           0	              Definir o índice ativo no carrossel.
controls	                    true	            Exibir os botões de próximo ou anterior na estrutura.
fade	                        false	            Exibir uma animação entre os slides quando estiverem em movimento.
indicatorLabels	               []	              Indicar uma matriz de rótulos para os indicadores do carrossel.
indicators	                  true	            Exibir um conjunto de indicadores que facilitam a navegação no carrossel.
interval	                    5000	            Definir qual o tempo de atraso entre o ciclo automático de um item.
keyboard	                    true	            Verificar se o carrossel reagirá a eventos de teclado da pessoa usuária ou não.
nextIcon	          <span aria-hidden="true"
                    className="carousel-control- Substituir o ícone padrão da seta que representa o item seguinte da estrutura.
                    next-icon"/>
nextLabel	                 ‘Próximo’	          Exibir o elemento seguinte do carrossel. Esse rótulo é exibido somente nos leitores de tela.
onSelect	                     –	              Disparar uma função quando o item ativo do carrossel é alterado.
onSlid                         –	              Disparar uma função quando o slide do carrossel é finalizado.
onSlide	                       –	              Disparar uma função quando o slide do carrossel é iniciado.
pause	                      ‘hover’	            Parar o carrossel com base em eventos do mouse, teclado, etc.
prevIcon	          <span aria-hidden="true"
                    className="carousel-control- Substituir o ícone padrão da seta que representa o item anterior da estrutura.
                    prev-icon"/>
prevLabel	                 ‘Anterior’	          Exibir o elemento anterior do carrossel. Esse rótulo é exibido somente nos leitores de tela.
slide	                        true	            Possibilitar a animação entre as imagens do carrossel.
touch	                        true	            Determinar se o carrossel poderá ter eventos de deslize para esquerda
                                                e direita em dispositivos sensíveis ao toque na tela, como tablets.
variant	                     ‘dark’	            Determinar qual será a cor dos controles, indicadores e legendas.
wrap	                        true	            Verificar se o carrossel precisará ter uma pausa brusca ou se será contínuo.
bsPrefix	                 ‘carousel’	          Trabalhar com os estilos do CSS utilizando o Bootstrap, dando alto suporte de customização.

Além das propriedades gerais existentes no React carousel, também existem as propriedades de item e as de legenda:

[Propriedades_de_Item]:

>Nome	                       Valor	                Propriedade utilizada para
as	                           –	              Definir um elemento para este componente. Esse elemento pode ser personalizado.
interval	                    true	            Definir qual o tempo de atraso entre o ciclo automático de um item.
bsPrefix	                 ‘carousel’	          Trabalhar com os estilos do CSS utilizando o Bootstrap, dando alto suporte de customização.

[Propriedades_de_legenda]:

>Nome	                       Valor	                Propriedade utilizada para
as	                           –	              Definir um elemento para este componente. Esse elemento pode ser personalizado.
bsPrefix	                 ‘carousel’	          Trabalhar com os estilos do CSS utilizando o Bootstrap, dando alto suporte de customização.

[Tabela_dos_métodos_do_React_carousel]:

>Nome                    	   Valor                  Método responsável por
showArrows              	    true          	  Exibir as setas “Anterior” e “Próximo”.
showStatus              	    true	            Exibir o índice atual do carrossel.
showIndicators          	    true	            Exibir pequenos pontos ou quadrados para movimentar o carrossel.
showThumbs	                  true          	  Exibir as miniaturas de fotos no carrossel.
thumbWidth          	     Undefined	          Definir qual será a largura que as fotos em formato miniatura terão no carrossel.
infiniteLoop	                false	            Adicionar um loop infinito no carrossel, ou seja,
                                                ele não parará a execução, independente do evento realizado.
selectedItem	                 –	              Definir qual será o item selecionado, inicialmente.
axis	                     horizontal	          Converter a orientação horizontal ou vertical do carrossel.
onChange	                     –	              Executar alguma função no carrossel quando as posições do carrossel forem atualizadas.
onClickItem 	                 –	              Executar alguma função no carrossel quando um item for clicado.
onClickThumb 	                 –	              Executar alguma função no carrossel quando uma miniatura for clicada.
stopOnHover 	                true	            Parar a reprodução de fotos do carrossel quando o mouse estiver em cima dele.
interval 	                    3000             	Definir o intervalo de tempo na reprodução automática.
transitionTime 	               350	            Definir qual será o tempo do intervalo de transição das fotos em milissegundos.
swipeable 	                  true	            Permitir que a pessoa usuária faça movimentos de deslizar a tela no carrossel.
dynamicHeight	                false	            Gerenciar a altura que o carrossel terá, caso seja preciso.
centerMode 	                  false	            Permitir a visualização centralizada com slides anteriores e seguintes.
labels 	                    opcional	          Permitir a especificação de rótulos adicionados aos controles do carrossel.
onSwipeStart 	                 –	              Executar alguma função no carrossel quando um gesto de passar o dedo é inicializado.
onSwipeEnd	                   –	              Executar alguma função no carrossel quando um gesto de passar o dedo é concluído.
onSwipeMove	                   –	              Executar alguma função no carrossel quando um gesto de passar o dedo é concluído.

!J------------------------------------------------------------------------------------------------------------------------------J!

# icons

>                                                https://fontawesome.com/search

# Symbols

♫ ★ 👎︎ • ☢️ ⭐ ⧈ 🐙 🎈 ✔️ ⓕ ☂ ✎ ✄ ✉ ☎ ☏ ❌ ⋈ ⌚ ❐ 📞 ✂️ 📎 ✏️ 🔒 🔑 💡 📜 ☎️ 📝 🔓 🔎 💾 🔆 💻 📚 📒 📖 📔 ⍣

📕 📗 📘 📙 🎼 🛍 🛢 🗑 🚧 ⚠️ ℹ️ 👍 👎 🛠 🛒 ☂️ ⏱ ⏲ ⚙️ ⚗️ 📽 📐 📏 📊 📧 📄 🔧 🎬 🎷 🔐 ✉️ 📩 📨 📋 📅 📦 📷 ≣ 🗨

💭 🗯 ⚡ 🌪 🌈 🕡 ✔ ✖  💬 🧭 ⛔️ ✅ 🛑 📰 🧪 ☑️ 🎄 🌪️ ☀️ 🗺 🗝 ❏ ➪ 🛎 🎟 ⛈ 👁 ➤➤ ➙ 📓 ⮜⮜ ⫷ ⫸ ៚ ༆ 乡 ♪ ϟ Ξ χ ⸕

🌡 🌙 🌱 🤙 🌴 🌵 🌲 🌾 🍄 🌐 🎵 🔋 🎞️ 🗝️ ♻️ 📁 🗑️ 🧯 🇲🇽


        <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi" className="speedometer" style={{ margin: 6 }}>
          <svg width="16" height="16" fill="#e8e8e8">
            <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547"/>
              <svg fill="#ffd900">
                <path d="M8 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
              </svg>
            <path d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
          </svg>
        </a>

                                                                                                               ⋈ vscode: 1.73.0
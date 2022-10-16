# GET
	http://localhost:8080/user/authenticate

	cd C:\Library-Vite\frontend  yarn install  yarn audit fix   yarn upgrade

	git commit: funcoes e recursos para projetos futuro

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
	http://localhost:8080/books

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
	    "language": "English"
	}
	{
	    "title": "Java Persistence with Hibernate",
	    "author": "Christian Bauer and Gavin King",
	    "photo": "https://images.manning.com/720/960/resize/book/d/2ea186d-c683-4d54-95f9-cca25b6fe49e/bauer2.png",
	    "isbn": 951199193,
	    "price": 771,
	    "language": "English"
	}
	{
	    "title": "Grails in Action",
	    "author": "Glen Smith and Peter Ledbrook",
	    "photo": "https://images.manning.com/720/960/resize/book/6/3e9d5ed-4155-466d-ab46-538bb355948d/gsmith2.png",
	    "isbn": 167290963,
	    "price": 907,
	    "language": "English"
	}
	{
	    "title": "Spring Boot in Action",
	    "author": "Craig Walls",
	    "photo": "https://images.manning.com/720/960/resize/book/6/bb80688-f898-4df7-838a-253b1de123c4/Walls-SpringBoot-HI.png",
	    "isbn": 117292540,
	    "price": 149,
	    "language": "English"
	}
	{
	    "title": "Head First Java: A Brain-Friendly Guide",
	    "author": "Kathy Sierra",
	    "photo": "https://covers.oreillystatic.com/images/9780596004651/lrg.jpg",
	    "isbn": 873666024,
	    "price": 498,
	    "language": "English"
	}

------------------------------------import.sql-----------------------------------

INSERT INTO tb_user(name, email, mobile, password) VALUES ('Maria', 'maria@gmail.com', '9787456540', (SELECT ENCODE(DIGEST('1234', 'sha512'), 'hex')))
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Joao', 'joao@gmail.com', '9787456541', (SELECT ENCODE(DIGEST('1235', 'sha512'), 'hex')))
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Cida', 'cida@gmail.com', '9787456542', (SELECT ENCODE(DIGEST('1236', 'sha512'), 'hex')))
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Natalia', 'natalia@gmail.com', '9787456543', (SELECT ENCODE(DIGEST('1237', 'sha512'), 'hex')))
INSERT INTO tb_user(name, email, mobile, password) VALUES ('Talita', 'tata@gmail.com', '9787456544', (SELECT ENCODE(DIGEST('1238', 'sha512'), 'hex')))
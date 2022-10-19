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
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Sort;
//import com.library.naldo.service.impl.IPageService;
//import com.library.naldo.service.impl.IService;


@RestController
@RequestMapping(path = "/book")
public class BookController {

    @Autowired
    private BookService service;

    @Autowired
    private BookRepository repository;

/* 	@Autowired
	private IPageService<Book> bookPageService; */

/* 	@Override
	public ResponseEntity<Page<Book>> findAll(Pageable pageable, String searchText) {
		return ResponseEntity.ok(bookPageService.findAll(pageable, searchText));
	}

	@Override
	public ResponseEntity<Page<Book>> findAll(int pageNumber, int pageSize, String sortBy, String sortDir) {
		return ResponseEntity.ok(bookPageService.findAll(PageRequest.of(pageNumber, pageSize, sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending())));
	} */

    @GetMapping
    public Page<BookDTO> findAllBooks(Pageable pageable) {
        return service.findAll(pageable);
    }

    @GetMapping(path = "/{id}")
    public BookDTO findOne(@PathVariable Long id) {
        return service.findById(id);
    }

    @DeleteMapping("{id}")
	public void deleteBook(@PathVariable Long id) {
		service.deleteById(id);
	}

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
	public Book create(@RequestBody Book book) {
		return repository.save(book);
	}

	@PutMapping
	public ResponseEntity<Book> saveBook(@RequestBody Book product) {
		return ResponseEntity.ok(repository.save(product));
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
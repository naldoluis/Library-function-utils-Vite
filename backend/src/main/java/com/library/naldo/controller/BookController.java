package com.library.naldo.controller;

import java.util.Arrays;
import java.util.Set;
import java.util.TreeSet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.library.naldo.domain.Book;
import com.library.naldo.dto.BookDTO;
import com.library.naldo.service.BookService;

@RestController
@RequestMapping("/books")
public class BookController implements Resource<Book> {

    @Autowired
    private BookService service;

/*  @Autowired
	private IPageService<BookDTO> bookPageService;
 
	@Override
	public ResponseEntity<Page<BookDTO>> findAll(Pageable pageable, String searchText) {
		return ResponseEntity.ok(bookPageService.findAll(pageable, searchText));
	}

	@Override
	public ResponseEntity<Page<BookDTO>> findAll(int pageNumber, int pageSize, String sortBy, String sortDir) {
		return ResponseEntity.ok(bookPageService.findAll(PageRequest.of(pageNumber, pageSize, sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending())));
	} */

    @GetMapping
    public Page<BookDTO> findAllBooks(Pageable pageable) {
        return service.findAll(pageable);
    }

    @GetMapping("/{id}")
    public BookDTO findOne(@PathVariable Long id) {
        return service.findById(id);
    }

	@Override
	public ResponseEntity<Book> save(Book book) {
		return ResponseEntity.ok(service.saveOrUpdate(book));
	}

	@Override
	public ResponseEntity<Book> update(Book book) {
		return ResponseEntity.ok(service.saveOrUpdate(book));
	}

	@Override
	public ResponseEntity<String> deleteById(Long id) {
		return ResponseEntity.ok(service.deleteById(id));
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
package com.library.naldo.controller;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.TreeSet;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ReflectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.library.naldo.domain.Book;
import com.library.naldo.exception.BookNotFoundException;
import com.library.naldo.service.impl.IPageService;
import com.library.naldo.service.impl.IService;
import com.library.naldo.utils.MethodUtils;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins="http://localhost:5173")
public class BookController implements Resource<Book> {

	@Autowired
	private IService<Book> service;

	@Autowired
	private IPageService<Book> bookPageService;

	private final String imagePath = "./src/main/resources/qrcodes/QRCode.png";

	public ResponseEntity<Book> generateByteQRCode(Long id) {
		Book bookObject = null;
		Optional<Book> book = service.findById(id);
		if (!book.isPresent()) {
			throw new BookNotFoundException("Book not found");
		} else {
			bookObject = book.get();
			bookObject.setBase64QRCode(MethodUtils.generateByteQRCode(bookObject.getPhoto(), 250, 250));
		}
		return ResponseEntity.ok(bookObject);
	}

	public ResponseEntity<Book> generateImageQRCode(Long id) {
		Book bookObject = null;
		Optional<Book> book = service.findById(id);
		if (!book.isPresent()) {
			throw new BookNotFoundException("Book not found");
		} else {
			bookObject = book.get();
			MethodUtils.generateImageQRCode(bookObject.getPhoto(), 250, 250, imagePath);
		}
		return ResponseEntity.ok(bookObject);
	}

	public ResponseEntity<Page<Book>> findAll(Pageable pageable, String searchText) {
		return ResponseEntity.ok(bookPageService.findAll(pageable, searchText));
	}

	public ResponseEntity<Page<Book>> findAll(int pageNumber, int pageSize, String sortBy, String sortDir) {
		return ResponseEntity.ok(bookPageService.findAll(PageRequest.of(pageNumber, pageSize, sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending())));
	}

	public ResponseEntity<Book> findById(Long id) {
		return ResponseEntity.ok(service.findById(id).get());
	}

	public ResponseEntity<Book> save(Book book) {
		return ResponseEntity.ok(service.saveOrUpdate(book));
	}

	public ResponseEntity<Book> update(Long id, Book book) {
		Optional<Book> bookUpdate = service.findById(id);
		if(bookUpdate.isEmpty())
			return ResponseEntity.notFound().build();
		book.setId(id);
		return ResponseEntity.ok(service.saveOrUpdate(book));
	}

	public ResponseEntity<Book> patch(Long id, Map<Object, Object> fields) {
		Optional<Book> bookPatch = service.findById(id);
		if(bookPatch.isPresent()) {
			fields.forEach((key, value) -> {
				Field field = ReflectionUtils.findField(Book.class, (String) key);
				field.setAccessible(true);
				ReflectionUtils.setField(field, bookPatch.get(), value);
			});
			return ResponseEntity.ok(service.saveOrUpdate(bookPatch.get()));
		}
		return null;
	}

	public ResponseEntity<String> deleteById(Long id) {
		return ResponseEntity.ok(service.deleteById(id));
	}

	@GetMapping("/languages")
	public ResponseEntity<Set<String>> findAllLanguages() {
		return ResponseEntity.ok(new TreeSet<>(Arrays.asList("French", "Portuguese", "English", "Russian", "Hindi", "Arabic", "Spanish", "Chinese")));
	}

	@GetMapping("/genres")
	public ResponseEntity<Set<String>> findAllGenres() {
		return ResponseEntity.ok(new TreeSet<>(Arrays.asList("Technology", "Science", "History", "Fantasy", "Biography", "Horror", "Romance")));
	}

	public ResponseEntity<String> invalid() {
		JSONObject jsonObject = new JSONObject();
		try {
			jsonObject.put("message", "something is missing, please check everything before sending the request!!!");
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(jsonObject.toString());
	}
}
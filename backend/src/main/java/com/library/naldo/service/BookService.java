package com.library.naldo.service;

import java.util.Collection;
import java.util.Optional;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.library.naldo.domain.Book;
import com.library.naldo.repository.BookRepository;
import com.library.naldo.service.impl.IPageService;
import com.library.naldo.service.impl.IService;

@Service
public class BookService implements IService<Book>, IPageService<Book> {

	@Autowired
	private BookRepository bookRepository;

	@Override
	public Collection<Book> findAll() {
		return (Collection<Book>) bookRepository.findAll();
	}

	@Override
	public Page<Book> findAll(Pageable pageable, String searchText) {
		return bookRepository.findAllBooks(pageable, searchText);
	}

	@Override
	public Page<Book> findAll(Pageable pageable) {
		return bookRepository.findAll(pageable);
	}

	@Override
	public Optional<Book> findById(Long id) {
		return bookRepository.findById(id);
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
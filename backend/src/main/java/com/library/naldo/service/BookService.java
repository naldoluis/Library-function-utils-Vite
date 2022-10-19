package com.library.naldo.service;

import javax.transaction.Transactional;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.library.naldo.domain.Book;
import com.library.naldo.dto.BookDTO;
import com.library.naldo.repository.BookRepository;
import com.library.naldo.service.impl.IServiceBook;

@Service
public class BookService implements IServiceBook<Book> {

	@Autowired
	private BookRepository bookRepository;

	@Transactional
	public Page<BookDTO> findAll(Pageable pageable) {
		Page<Book> result = bookRepository.findAll(pageable);
		Page<BookDTO> page = result.map(b -> new BookDTO(b));
		return page;
	}

	@Transactional
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
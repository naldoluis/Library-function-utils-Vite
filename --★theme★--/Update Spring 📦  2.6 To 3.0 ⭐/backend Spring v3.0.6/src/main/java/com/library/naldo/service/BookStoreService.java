package com.library.naldo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.library.naldo.dto.BookStoreDTO;
import com.library.naldo.domain.BookStore;
import com.library.naldo.repository.BookStoreRepository;

@Service
public class BookStoreService {

    @Autowired
    private BookStoreRepository repository;

    @Transactional(readOnly = true)
    public Page<BookStoreDTO> findAll(Pageable pageable) {
        Page<BookStore> result = repository.findAll(pageable);
        Page<BookStoreDTO> page = result.map(x -> new BookStoreDTO(x));
        return page;
    }

    @Transactional(readOnly = true)
    public BookStoreDTO findById(Long id) {
        BookStore result = repository.findById(id).get();
        BookStoreDTO dto = new BookStoreDTO(result);
        return dto;
    }
}
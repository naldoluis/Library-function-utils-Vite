package com.library.naldo.controller;

import com.library.naldo.dto.BookStoreDTO;
import com.library.naldo.service.BookStoreService;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/store")
@CrossOrigin(origins="http://127.0.0.1:5173")
public class BookStoreController {

    @Autowired
    private BookStoreService service;

    @GetMapping
    public Page<BookStoreDTO> findAll(Pageable pageable) {
        return service.findAll(pageable);
    }

    @GetMapping("{id}")
    public BookStoreDTO findById(@PathVariable UUID id) {
        return service.findById(id);
    }
}
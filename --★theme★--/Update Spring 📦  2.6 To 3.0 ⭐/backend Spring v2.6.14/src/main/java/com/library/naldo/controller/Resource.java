package com.library.naldo.controller;

import java.util.Map;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface Resource<T> {

	@GetMapping("/search/{searchText}")
	ResponseEntity<Page<T>> findAll(Pageable pageable, @PathVariable String searchText);

	@GetMapping
	ResponseEntity<Page<T>> findAll(int pageNumber, int pageSize, String sortBy, String sortDir);

	@GetMapping("{id}")
	ResponseEntity<T> findById(@PathVariable Long id);

	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<T> save(@RequestBody T t);

	@PutMapping("{id}")
	ResponseEntity<T> update(@PathVariable Long id, @RequestBody T t);

	@PatchMapping("{id}")
	ResponseEntity<T> patch(@PathVariable Long id, @RequestBody Map<Object, Object> fields);

	@DeleteMapping("{id}")
	ResponseEntity<String> deleteById(@PathVariable Long id);
}
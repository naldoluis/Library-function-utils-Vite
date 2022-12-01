package com.library.naldo.repository;

import com.library.naldo.domain.BookStore;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookStoreRepository extends JpaRepository<BookStore, Long> {}
package com.library.naldo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.library.naldo.domain.BookStore;

@Repository
public interface BookStoreRepository extends JpaRepository<BookStore, Long> {}
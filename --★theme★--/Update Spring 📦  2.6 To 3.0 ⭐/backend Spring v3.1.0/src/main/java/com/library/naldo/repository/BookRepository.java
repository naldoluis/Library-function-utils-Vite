package com.library.naldo.repository;

import java.util.Collection;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.library.naldo.domain.Book;

@Repository
public interface BookRepository extends PagingAndSortingRepository<Book, Long> {
    @Query("FROM Book b WHERE b.title LIKE %:searchText% OR b.author LIKE %:searchText% OR b.language LIKE %:searchText% OR b.genre LIKE %:searchText% ORDER BY b.price ASC")
    Page<Book> findAllBooks(Pageable pageable, @Param("searchText") String searchText);
    Collection<Book> findAll();
    Book save(Book book);
    void deleteById(Long id);
    Optional<Book> findById(Long id);
}
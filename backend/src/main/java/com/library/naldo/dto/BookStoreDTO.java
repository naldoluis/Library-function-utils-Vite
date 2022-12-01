package com.library.naldo.dto;

import com.library.naldo.domain.BookStore;
import lombok.Data;

@Data
public class BookStoreDTO {

    private Long id;
	private String title;
	private String author;
	private String photo;
	private String language;
	private String genre;

    public BookStoreDTO(BookStore bookStore) {
        id = bookStore.getId();
        title = bookStore.getTitle();
        title = bookStore.getAuthor();
        title = bookStore.getPhoto();
        title = bookStore.getLanguage();
        title = bookStore.getGenre();
    }
}
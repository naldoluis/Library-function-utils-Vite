package com.library.naldo.dto;

import java.util.UUID;
import com.library.naldo.domain.BookStore;
import lombok.Data;

@Data
public class BookStoreDTO {

    private UUID id;
	private String title;
	private String author;
	private String photo;
	private String language;
	private String genre;

    public BookStoreDTO(BookStore bookStore) {
        id = bookStore.getId();
        title = bookStore.getTitle();
        author = bookStore.getAuthor();
        photo = bookStore.getPhoto();
        language = bookStore.getLanguage();
        genre = bookStore.getGenre();
    }
}
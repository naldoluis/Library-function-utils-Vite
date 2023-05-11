package com.library.naldo.dto;

import lombok.Data;
import com.library.naldo.domain.BookStore;

@Data
public class BookStoreDTO {

    private Long id;
	private String title;
	private String author;
	private String photo;
	private String language;
	private String genre;
	private String video;
	private String poster;

    public BookStoreDTO(BookStore bookStore) {
        id = bookStore.getId();
        title = bookStore.getTitle();
        author = bookStore.getAuthor();
        photo = bookStore.getPhoto();
        language = bookStore.getLanguage();
        genre = bookStore.getGenre();
        video = bookStore.getVideo();
        poster = bookStore.getPoster();
    }
}
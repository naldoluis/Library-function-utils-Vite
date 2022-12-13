package com.library.naldo.dto;

import java.util.UUID;
import com.library.naldo.domain.Book;
import lombok.Data;

@Data
public class BookDTO {

    private UUID id;
	private String title;
	private String author;
	private String photo;
	private UUID isbn;
	private Double price;
	private String language;
	private String genre;

    public BookDTO(Book book) {
        id = book.getId();
        title = book.getTitle();
        author = book.getAuthor();
        photo = book.getPhoto();
        isbn = book.getIsbn();
        price = book.getPrice();
        language = book.getLanguage();
        genre = book.getGenre();
    }
}
//                                             <!>________________+
//                                      _________________         |
//                                    ¨¨                 ¨¨       |
//                                    ¨¨     Disabled    ¨¨       |
//                                    ¨¨                 ¨¨       |
//                                    ¨¨-----------------¨¨       |
//                                                   <|$-_________|
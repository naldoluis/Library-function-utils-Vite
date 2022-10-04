package com.library.naldo.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "tbl_book")
public class Book {

	@Id
	@GeneratedValue
	private Long id;

	@Column(nullable = false)
	private String title;

	@Column(nullable = false)
	private String author;

	@Column(nullable = false)
	private String coverPhotoURL;

	@Column(nullable = false)
	private Long isbnNumber;

	@Column(nullable = false)
	private Double price;

	@Column(nullable = false)
	private String language;

	@Column(nullable = false)
	private String genre;
}
package com.library.naldo.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "tb_book")
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, length = 70)
	private String title;

	@Column(nullable = false, length = 20)
	private String author;

	@Column(nullable = false)
	private String photo;

	@Column(nullable = false)
	private Long isbn;

	@Column(nullable = false)
	private Double price;

	@Column(nullable = false, length = 15)
	private String language;

	@Column(nullable = false, length = 15)
	private String genre;
}
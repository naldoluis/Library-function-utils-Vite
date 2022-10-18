package com.library.naldo.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "tb_user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, length = 20)
	private String name;

	@Column(nullable = false, unique = true, length = 25)
	private String email;

	@Column(nullable = false, unique = true, length = 19)
	private String mobile;

	@Column(nullable = false, length = 20)
	private String password;

	@ManyToOne
	@JoinColumn(name = "role_id")
	private Role role;
}
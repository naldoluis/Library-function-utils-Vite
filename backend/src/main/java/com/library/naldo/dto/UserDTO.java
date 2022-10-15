package com.library.naldo.dto;

import com.library.naldo.domain.User;
import lombok.Data;

@Data
public class UserDTO {

	private Long id;
	private String name;
	private String email;
	private String mobile;
	private String password;

    public UserDTO(User user) {
        id = user.getId();
        name = user.getName();
        email = user.getEmail();
        mobile = user.getMobile();
        password = user.getPassword();
    }
}
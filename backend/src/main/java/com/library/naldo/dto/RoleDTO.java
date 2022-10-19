package com.library.naldo.dto;

import com.library.naldo.domain.Role;
import lombok.Data;

@Data
public class RoleDTO {

    private Long id;
	private String name;

    public RoleDTO(Role role) {
        id = role.getId();
        name = role.getName();
    }
}
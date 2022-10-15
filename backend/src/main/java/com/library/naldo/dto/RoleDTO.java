package com.library.naldo.dto;

import com.library.naldo.domain.Role;
import lombok.Data;

@Data
public class RoleDTO {

	private String name;

    public RoleDTO(Role role) {
        name = role.getName();
    }
}
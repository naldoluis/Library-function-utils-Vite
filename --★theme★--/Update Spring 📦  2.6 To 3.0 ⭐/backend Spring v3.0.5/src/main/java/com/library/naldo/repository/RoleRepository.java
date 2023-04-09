package com.library.naldo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.library.naldo.domain.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	@Query("FROM Role WHERE name=:name")
	Role findByName(@Param("name") String name);
}
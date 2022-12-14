package com.library.naldo.repository;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.library.naldo.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
	@Query("FROM User WHERE email=:email")
	User findByEmail(@Param("email") String email);
}
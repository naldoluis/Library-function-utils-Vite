package com.library.naldo.service.impl;

import java.util.Collection;
import java.util.Optional;
import java.util.UUID;

public interface IRoleService<T> {
	T findByName(String name);
	T saveOrUpdate(T t);
	String deleteById(UUID id);
	Collection<T> findAll();
	Optional<T> findById(UUID id);
}
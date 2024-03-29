package com.library.naldo.service.impl;

import java.util.Collection;
import java.util.Optional;

public interface IRoleService<T> {
	T findByName(String name);
	T saveOrUpdate(T t);
	Optional<T> findById(Long id);
	String deleteById(Long id);
	Collection<T> findAll();
}
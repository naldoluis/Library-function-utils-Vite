package com.library.naldo.service.impl;

import java.util.Collection;
import java.util.Optional;

public interface IService<T> {
	T saveOrUpdate(T t);
	Collection<T> findAll();
	Optional<T> findById(Long id);
	String deleteById(Long id);
}
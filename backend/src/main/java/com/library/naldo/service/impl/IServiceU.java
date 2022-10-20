package com.library.naldo.service.impl;

import java.util.Collection;
import java.util.Optional;

public interface IServiceU<T> {
	Collection<T> findAll();
	Optional<T> findById(Long id);
	T saveOrUpdate(T t);
	String deleteById(Long id);
}
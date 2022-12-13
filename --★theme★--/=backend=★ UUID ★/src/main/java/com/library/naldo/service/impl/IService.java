package com.library.naldo.service.impl;

import java.util.Collection;
import java.util.Optional;
import java.util.UUID;

public interface IService<T> {
	T saveOrUpdate(T t);
	Collection<T> findAll();
	Optional<T> findById(UUID id);
	String deleteById(UUID id);
}
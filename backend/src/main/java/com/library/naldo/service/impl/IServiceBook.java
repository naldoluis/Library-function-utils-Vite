package com.library.naldo.service.impl;

public interface IServiceBook<T> {
	String deleteById(Long id);
	T saveOrUpdate(T t);
}
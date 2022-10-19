package com.library.naldo.service.impl;

public interface IServiceBook<T> {
    T saveOrUpdate(T t);
	String deleteById(Long id);
}
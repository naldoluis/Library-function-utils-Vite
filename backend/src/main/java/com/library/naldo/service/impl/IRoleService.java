package com.library.naldo.service.impl;

public interface IRoleService<T> extends IService<T> {
	T findByName(String name);
}
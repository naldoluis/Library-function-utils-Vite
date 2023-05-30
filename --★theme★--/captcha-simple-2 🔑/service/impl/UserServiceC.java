package com.library.naldo.service.impl;

import java.util.Set;
import com.library.naldo.domain.User;

public interface UserServiceC {

	void add(User user);
	Set<User> users();
}
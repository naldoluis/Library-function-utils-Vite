package com.library.naldo.service;

import java.util.HashSet;
import java.util.Set;
import org.springframework.stereotype.Service;
import com.library.naldo.domain.User;
import com.library.naldo.service.impl.UserServiceC;

@Service
public class IServiceCaptcha implements UserServiceC {

	private Set<User> users = new HashSet<User>();

	public void add(User user) {
		users.add(user);
	}

	public Set<User> users() {
		return users;
	}
}
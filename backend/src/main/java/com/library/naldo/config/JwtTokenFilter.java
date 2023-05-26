package com.library.naldo.config;

import java.io.IOException;
import java.util.Date;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import io.jsonwebtoken.Claims;

public class JwtTokenFilter extends OncePerRequestFilter {

	private static Logger log = LoggerFactory.getLogger(JwtTokenFilter.class);

	@Autowired
	private JwtTokenProvider tokenProvider;

	public JwtTokenFilter(JwtTokenProvider tokenProvider) {
		this.tokenProvider = tokenProvider;
	}

	public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
		log.info("JwtTokenFilter : doFilterInternal");
		String token = request.getHeader("Authorization");
		if (token != null) {
			try {
				Claims claims = tokenProvider.getClaimsFromToken(token);
				if (!claims.getExpiration().before(new Date())) {
					Authentication authentication = tokenProvider.getAuthentication(claims.getSubject());
					if (authentication.isAuthenticated()) {
						SecurityContextHolder.getContext().setAuthentication(authentication);
					}
				}
			} catch (RuntimeException e) {
				try {
					SecurityContextHolder.clearContext();
					response.setContentType("application/json");
					response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
					response.getWriter().println(new JSONObject().put("exception", "expired or invalid JWT token 🔐" + e.getMessage()));
				} catch (IOException | JSONException e1) {
					e1.printStackTrace();
				}
				return;
			}
		} else {
			log.info("⚠️ first time so creating token using UserResourceImpl - authenticate method");
		}
		filterChain.doFilter(request, response);
	}
}
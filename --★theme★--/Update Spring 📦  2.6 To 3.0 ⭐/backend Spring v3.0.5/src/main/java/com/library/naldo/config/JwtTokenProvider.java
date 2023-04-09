package com.library.naldo.config;

import java.io.Serializable;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import com.library.naldo.domain.Role;

@Component
public class JwtTokenProvider implements Serializable {
	private static final long serialVersionUID = 1L;

	@Value("${jwt.secret-key}")
	private String secretKey;

	@PostConstruct
	protected void init() {
		secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
	}

	private Integer validityInMilliseconds = 1200000;

	public String createToken(String username, Role role) {
		Claims claims = Jwts.claims().setSubject(username);
		claims.put("auth", role);
		Date now = new Date();
		return Jwts.builder().setClaims(claims).setIssuedAt(now)
				.setExpiration(new Date(now.getTime() + validityInMilliseconds))
				.signWith(getSignInKey(), SignatureAlgorithm.HS256).compact();
	}
 
	private Key getSignInKey() {
		byte[] keyBytes = Decoders.BASE64.decode(secretKey);
		return Keys.hmacShaKeyFor(keyBytes);
	}

 	@Autowired
	private UserDetailsService userDetailsService;

	public Authentication getAuthentication(String username) {
		UserDetails userDetails = userDetailsService.loadUserByUsername(username);
		return new UsernamePasswordAuthenticationToken(userDetails.getUsername(), userDetails.getPassword(), userDetails.getAuthorities());
	}

	public Claims getClaimsFromToken(String token) {
		return Jwts.parserBuilder().setSigningKey(getSignInKey()).build().parseClaimsJws(token).getBody();
	}
}
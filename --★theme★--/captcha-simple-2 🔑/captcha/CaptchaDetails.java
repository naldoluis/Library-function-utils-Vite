package com.library.naldo.captcha;

import java.io.Serializable;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.util.WebUtils;
import nl.captcha.Captcha;

public class CaptchaDetails implements Serializable {
	private static final long serialVersionUID = 1L;

	private final String answer;
	private final Captcha captcha;

	public CaptchaDetails(HttpServletRequest request) {
		this.answer = request.getParameter("captcha");
		this.captcha = (Captcha) WebUtils.getSessionAttribute(request, "captcha");
	}

	public String getAnswer() {
		return answer;
	}

	public Captcha getCaptcha() {
		return captcha;
	}
}
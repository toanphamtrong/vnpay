package com.datn.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class VNPayResponse {
	private String message;
	private double balance; 
	public VNPayResponse( String message) {
		this.message = message;
	}
}

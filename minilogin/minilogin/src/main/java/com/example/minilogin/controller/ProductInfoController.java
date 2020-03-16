package com.example.minilogin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.minilogin.DAO.ProductInfoDao;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductInfoController {
	@Autowired
	private ProductInfoDao productInfo;
	
	@GetMapping("/products")
	public List getProducts() {	
	return productInfo.viewAllProducts();
}


}

package com.datn.repository;

import com.datn.entity.Cart;
import com.datn.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface CartRepository extends JpaRepository<Cart, Long> {
    Cart findByUser(User user); // tham số truyeenfn vào là User
    
    @Query(value = "SELECT MAX(id) FROM Cart c WHERE c.user_id IS NULL", nativeQuery = true)
	Long findCartId();
}

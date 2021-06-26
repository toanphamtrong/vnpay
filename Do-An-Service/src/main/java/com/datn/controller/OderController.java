package com.datn.controller;

import com.datn.dto.BrandDTO;
import com.datn.dto.OderDTO;
import com.datn.dto.OderDetailDTO;
import com.datn.dto.ProductDto;
import com.datn.service.iservice.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/oders")
@CrossOrigin("http://localhost:4200")
public class OderController {
    @Autowired
    OrderService orderService;
    @GetMapping("/all")
    public ResponseEntity findAll(HttpServletRequest request){
        return ResponseEntity.ok().body(orderService.findAll());
    }
    //tìm kiếm đơn hàng theo User
    @GetMapping("/user/{id}")
    public ResponseEntity findByUserId(HttpServletRequest request, @PathVariable Long id){
        return ResponseEntity.ok().body(orderService.findByUserId(request,id));
    }
    //Tìm kiếm đơn hàng theo id
    @GetMapping("/{id}")
    public ResponseEntity findById(HttpServletRequest request, @PathVariable Long id){
        return ResponseEntity.ok().body(orderService.findById(request, id));
    }

    //Tìm kiến đơn hàng khi người dùng nhập
    @GetMapping("/seach")
    public ResponseEntity search(HttpServletRequest request, OderDTO dto){
        return ResponseEntity.ok().body(orderService.search(request,dto));
    }
    //Lấy chi tiết đơn hàng theo code
    @GetMapping("/oderdetaill")
    public ResponseEntity oderDetaill(HttpServletRequest request, OderDTO dto){
        return ResponseEntity.ok().body(orderService.searchOderDetail(request,dto));
    }
    //Lưu đơn hàng
    @PostMapping("")
    public ResponseEntity save(HttpServletRequest request, @RequestBody OderDTO dto){
        return ResponseEntity.ok().body(orderService.saveOrUpdate(request, dto));
    }
    //Cập nhập đơn hàng
    @PutMapping("")
    public ResponseEntity update(HttpServletRequest request, @RequestBody BrandDTO dto){
        return ResponseEntity.ok().body(orderService.saveOrUpdate(request, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteById(HttpServletRequest request, @PathVariable Long id){
        Map<String, String> responseData = new HashMap<>();
        String message;
        Boolean result = orderService.delete(request, id);
        if (result){
            message = "Delete success!";
            responseData.put("message", message);
            return ResponseEntity.ok().body(responseData);
        }
        return ResponseEntity.notFound().build();
    }
}

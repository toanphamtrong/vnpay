import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-slide',
  templateUrl: './brand-slide.component.html',
  styleUrls: ['./brand-slide.component.css']
})
export class BrandSlideComponent implements OnInit {
  brandSlides = [
    {img: 'assets/style/img/brand-1.png'},
    {img: 'assets/style/img/brand-2.png'},
    {img: 'assets/style/img/brand-3.png'},
    {img: 'assets/style/img/brand-4.png'},
    {img: 'assets/style/img/brand-5.png'},
    {img: 'assets/style/img/brand-6.png'},

  ];

  brandSlickConfig = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}

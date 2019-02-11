import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  items: Array<any> = []

  constructor() {
    this.items = [
      { name: 'assets/images/slider1.png' },
 
      { name: 'assets/images/slider1.png' },
      { name: 'assets/images/slider1.png' },   
      { name: 'assets/images/slider1.png' },
      { name: 'assets/images/slider1.png' },
      { name: 'assets/images/slider1.png' },
      { name: 'assets/images/slider1.png' },

       ]
  
 
}
ngOnInit() {
}
}
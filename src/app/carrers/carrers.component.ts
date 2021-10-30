import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrls: ['./carrers.component.css']
})
export class CarrersComponent  {
  slides = [
    {'image': 'https://5.imimg.com/data5/ZP/MK/JH/SELLER-8429132/electronic-designing-services-500x500.png'}, 
    {'image': 'https://5.imimg.com/data5/BY/NQ/LT/SELLER-8429132/board-design-services-500x500.jpg'},
    {'image': 'https://5.imimg.com/data5/GG/QY/OB/SELLER-8429132/embedded-design-services-500x500.jpg'}, 
    {'image': 'https://5.imimg.com/data5/PH/BD/KE/SELLER-8429132/mechanical-design-service-500x500.png'}, 
    {'image': 'https://5.imimg.com/data5/ES/OL/QR/SELLER-8429132/panel-designing-services-500x500.jpg'}
  ];

}

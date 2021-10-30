import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
slides = [
    {'image': 'https://5.imimg.com/data5/ZP/MK/JH/SELLER-8429132/electronic-designing-services-500x500.png'}, 
    {'image': 'https://5.imimg.com/data5/FO/PB/UX/SELLER-8429132/single-phase-plc-panel-250x250.jpg'},
    {'image': 'https://5.imimg.com/data5/GG/QY/OB/SELLER-8429132/embedded-design-services-500x500.jpg'}, 
    {'image': 'https://5.imimg.com/data5/PH/BD/KE/SELLER-8429132/mechanical-design-service-500x500.png'}, 
    {'image': 'https://5.imimg.com/data5/ES/OL/QR/SELLER-8429132/panel-designing-services-500x500.jpg'},
    {'image': 'https://5.imimg.com/data5/MF/GW/RY/SELLER-8429132/scada-systems-and-services-250x250.png'},
    {'image': 'https://5.imimg.com/data5/ES/OL/QR/SELLER-8429132/panel-designing-services-500x500.jpg'}         
  ];
}

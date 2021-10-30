import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { FooterListComponent } from './footer-list/footer-list.component';
import { JoinNowComponent } from './join-now/join-now.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FooterList2Component } from './footer-list2/footer-list2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductSevicesComponent } from './product-sevices/product-sevices.component';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatListModule } from '@angular/material/list';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDividerModule} from '@angular/material/divider';
import { IOTGatewayComponent } from './iot-gateway/iot-gateway.component';
import { IOTDashboardComponent } from './iot-dashboard/iot-dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Routes } from '@angular/router';


const MaterialComponents=[MatButtonModule,MatButtonToggleModule,MatIconModule]
//lazy module avoid to more bandwidth 
const routes:Routes=[
  {
    path:'home',
    loadChildren: () => import('./home/home.component').then(m=>m.HomeComponent)
  },
  {
    path:'contactus',
    loadChildren: () => import('./contactus/contactus.component').then(m=>m.ContactusComponent)
  },
]

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavHeaderComponent,
    FooterListComponent,
    JoinNowComponent,
    EmployeeListComponent,
    StudentListComponent,
    FooterList2Component,
    SlideShowComponent,
    ProductSevicesComponent,
    IOTGatewayComponent,
    IOTDashboardComponent,
   // MatListModule,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
   MatCarouselModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
   
      ],
      exports:[
    MatSidenavModule

      ],
providers: [],
bootstrap: [ AppComponent ]
})
export class AppModule {
 }
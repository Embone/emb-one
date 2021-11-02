import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HomeComponent } from './home/home.component';
import { ProductsComponent} from './products/products.component';
import {ServicesComponent} from './services/services.component';
import { AboutusComponent} from './aboutus/aboutus.component';
import {ContactusComponent} from './contactus/contactus.component';
import { CarrersComponent} from './carrers/carrers.component'
import { InvalidListComponent } from './invalid-list/invalid-list.component';
import { JoinNowComponent } from './join-now/join-now.component';


const routes: Routes = [
  {path:'home',component: HomeComponent},
{path:'products',component:ProductsComponent},
{path:'services',component:ServicesComponent},
{path:'aboutus',component: AboutusComponent},
{path:'contactus',component:ContactusComponent},
{path:'carrers',component: CarrersComponent},
{path:'joinNow',component:JoinNowComponent},
{ path: '**', pathMatch: 'full', component:InvalidListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,ProductsComponent,ServicesComponent,AboutusComponent,ContactusComponent, CarrersComponent,JoinNowComponent,InvalidListComponent]
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { CarritoComponent } from '../app/Shared/carrito/carrito.component'
import { AboutUsComponent } from './Shared/about-us/about-us.component';


import { FooterComponent } from './Shared/footer/footer.component';
import { ListCartComponent } from './Shared/list-cart/list-cart.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  
  {path:'',component:HomeComponent},

  {path:'lista_carrito',component:ListCartComponent},

  {path:'Inicio',component:HomeComponent},

  {path:'Productos',component:CarritoComponent},  

  {path:'Conocenos',component:AboutUsComponent},
  
  {path:'Contacto',component:FooterComponent},  

  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

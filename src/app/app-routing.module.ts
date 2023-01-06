import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { CarritoComponent } from '../app/Shared/carrito/carrito.component'
import { AboutUsComponent } from './Shared/about-us/about-us.component';
import { HeroSectionComponent } from './Shared/hero-section/hero-section.component';
import { ListCartComponent } from './Shared/list-cart/list-cart.component';

const routes: Routes = [
  
  {path:'',component:CarritoComponent},

  {path:'lista_carrito',component:ListCartComponent},

  {path:'Inicio',component:HeroSectionComponent},

  {path:'Productos',component:CarritoComponent},  

  {path:'Conocenos',component:AboutUsComponent},
  
  {path:'Contacto',component:AboutUsComponent}

  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

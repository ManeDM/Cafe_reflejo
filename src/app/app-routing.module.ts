import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { CarritoComponent } from '../app/Shared/carrito/carrito.component'
import { AboutUsComponent } from './Shared/about-us/about-us.component';
import { HeroSectionComponent } from './Shared/hero-section/hero-section.component';

import { FooterComponent } from './Shared/footer/footer.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  
  {path:'',component:CarritoComponent},

  {path:'lista_carrito',component:DetailsComponent},

  {path:'Inicio',component:HeroSectionComponent},

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

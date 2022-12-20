import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { CarritoComponent } from '../app/Shared/carrito/carrito.component'
import { ListCartComponent } from './Shared/list-cart/list-cart.component';

const routes: Routes = [
  {path:'',component:CarritoComponent},

  {path:'lista_carrito',component:ListCartComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

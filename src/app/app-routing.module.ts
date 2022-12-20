import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { CarritoComponent } from '../app/Shared/carrito/carrito.component'

const routes: Routes = [
  {path:'',component:CarritoComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

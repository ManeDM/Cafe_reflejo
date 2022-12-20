import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './/Shared/products/products.component';
import { ViewCartComponent } from './/Detail/wiev-cart/wiev-cart.component';  // Importar el componente ViewCartComponent

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'view-cart', component: ViewCartComponent }  // Definir la ruta para el componente ViewCartComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
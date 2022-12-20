import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { SliderComponent } from './Shared/slider/slider.component';
import { AboutUsComponent } from './Shared/about-us/about-us.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { ViewCartComponent } from '../app/Detail/wiev-cart/wiev-cart.component' 
import { HeroSectionComponent } from './Shared/hero-section/hero-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './Shared/products/products.component'
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AboutUsComponent,
    FooterComponent,
    ViewCartComponent,
    HeroSectionComponent,
    ProductsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

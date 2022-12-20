import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { SliderComponent } from './Shared/slider/slider.component';
import { AboutUsComponent } from './Shared/about-us/about-us.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { WievCartComponent } from './Detail/wiev-cart/wiev-cart.component';
import { HeroSectionComponent } from './Shared/hero-section/hero-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './Shared/products/products.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AboutUsComponent,
    FooterComponent,
    WievCartComponent,
    HeroSectionComponent,
    ProductsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

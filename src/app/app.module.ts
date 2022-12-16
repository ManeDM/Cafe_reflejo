import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { SliderComponent } from './Shared/slider/slider.component';
import { CartComponent } from './Shared/cart/cart.component';
import { AboutUsComponent } from './Shared/about-us/about-us.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { WievCartComponent } from './Detail/wiev-cart/wiev-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    CartComponent,
    AboutUsComponent,
    FooterComponent,
    WievCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

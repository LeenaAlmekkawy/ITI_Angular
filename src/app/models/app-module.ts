import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FooterComponent } from '../components/footer/footer.component';
import { ProductsComponent } from '../components/products/products.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { TestComponent } from '../components/test/test.component';
import { FormsModule } from '@angular/forms';
import { MaxLengthPipe } from '../pipes/max-length-pipe';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App, ProductsComponent, NavbarComponent, FooterComponent, TestComponent, MaxLengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }

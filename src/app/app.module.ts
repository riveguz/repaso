import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Paginas/home/home.component';
import { NoticiasComponent } from './Paginas/noticias/noticias.component';
import { LocalComponent } from './Paginas/local/local.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoticiasComponent,
    LocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

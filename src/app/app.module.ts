import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { FawaterComponent } from './components/fawater/fawater.component';
import { TalabatComponent } from './components/talabat/talabat.component';
import { TfaselComponent } from './components/tfasel/tfasel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    FawaterComponent,
    TalabatComponent,
    TfaselComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

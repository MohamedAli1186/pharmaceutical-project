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
import { TfaselFatoraComponent } from './components/tfasel-fatora/tfasel-fatora.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrivacyComponent } from './components/footer/privacy/privacy.component';


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
    TfaselFatoraComponent,
    NavbarComponent,
    FooterComponent,
    PrivacyComponent
   
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

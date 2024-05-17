import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { FawaterComponent } from './components/fawater/fawater.component';
import { TalabatComponent } from './components/talabat/talabat.component';
import { TfaselComponent } from './components/tfasel/tfasel.component';
import { TfaselFatoraComponent } from './components/tfasel-fatora/tfasel-fatora.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: MainComponent },
  { path: 'talabat', component: TalabatComponent },
  { path: 'tfasel/:id', component: TfaselComponent },
  { path: 'tfaselFatora/:id', component: TfaselFatoraComponent },
  { path: 'fawater', component: FawaterComponent  },
  { path: '**', component:  HomeComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

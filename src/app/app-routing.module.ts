import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AppComponent } from './app.component';







const routes: Routes = [

 {path: 'login', component: LoginComponent},
 {path: 'Inventory', component: AppComponent},
];

@NgModule({
  imports: [

    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

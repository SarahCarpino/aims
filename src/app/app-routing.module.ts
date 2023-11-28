import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';



const routes: Routes = [
  

  { path: 'Inventory', component: AppComponent },
  { path: 'Test', component: TestComponent },

];

@NgModule({
  imports: [

    
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

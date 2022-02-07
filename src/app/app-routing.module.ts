import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './MyComponent/dashboard/dashboard.component';
import { FormComponent } from './MyComponent/form/form.component';
import { HomeComponent } from './MyComponent/home/home.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path :''
  },
  {
    component:FormComponent,
    path :'form'
  },
  {
    component:FormComponent,
    path :'form/:personId'
  },
  {
    component:DashboardComponent,
    path :'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

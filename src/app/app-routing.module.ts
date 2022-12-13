import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'dashboard', component: DashboardComponent, children:[
    {path: 'home', component:HomeComponent},{path:'calculator', component:CalculatorComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path: 'directives', component:DirectivesComponent},
    {path:'gpay', component:GpayComponent},
    {path:"flipkart", component:FlipkartComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'payment', component:PaymentComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

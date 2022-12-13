import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { MesurementsComponent } from './mesurements/mesurements.component';
import { DirectivesComponent } from './directives/directives.component';
import { GpayComponent } from './gpay/gpay.component';
import { FlipkartComponent } from './flipkart/flipkart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PaymentComponent,
    HomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    MesurementsComponent,
    DirectivesComponent,
    GpayComponent,
    FlipkartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

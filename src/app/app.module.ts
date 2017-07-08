import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
import { LineChartComponent } from './chart/line-chart/line-chart.component';
import { ComparativeChartComponent } from './chart/comparative-chart/comparative-chart.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


import { AuthGuard} from './auth/auth-guard.service'
import { AuthService} from './auth/auth.service'
import {ColorService } from './service/color.service'
import { DataService } from './service/data.service';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    BarChartComponent,
    LineChartComponent,
    ComparativeChartComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ColorService, DataService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

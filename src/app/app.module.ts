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
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { D3ChartsComponent } from './d3-charts/d3-charts.component'
import { D3BarChartComponent } from './d3-charts/bar-chart/bar-chart.component';
import { DirectedGraphComponent } from './d3-charts/directed-graph/directed-graph.component';
import { GojsChartsComponent } from './gojs-charts/gojs-charts.component';
import { TransactionFlowComponent } from './gojs-charts/transaction-flow/transaction-flow.component'

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
    HomeComponent,
    MainComponent,
    D3ChartsComponent,
    D3BarChartComponent,
    DirectedGraphComponent,
    GojsChartsComponent,
    TransactionFlowComponent
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

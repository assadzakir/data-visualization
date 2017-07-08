import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
import { LineChartComponent } from './chart/line-chart/line-chart.component';
import { ComparativeChartComponent } from './chart/comparative-chart/comparative-chart.component';
import { HeaderComponent } from './header/header.component';

import {ColorService } from './service/color.service'
import { DataService } from './service/data.service'

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    BarChartComponent,
    LineChartComponent,
    ComparativeChartComponent,
    HeaderComponent,
  ],
  imports: [
    ChartsModule,
    BrowserModule
  ],
  providers: [ColorService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

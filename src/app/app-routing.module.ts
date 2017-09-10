import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main/main.component';
import {HomeComponent} from './home/home.component';
import {ChartComponent} from './chart/chart.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth-guard.service';
import {D3ChartsComponent} from './d3-charts/d3-charts.component';
import {GojsChartsComponent} from './gojs-charts/gojs-charts.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, children: [
    {path: '', component: MainComponent },
    {path: 'ng2-charts', component: ChartComponent, canActivate: [AuthGuard]},
    {path: 'd3-charts', component: D3ChartsComponent, canActivate: [AuthGuard]},
    {path: 'gojs-charts', component: GojsChartsComponent, canActivate: [AuthGuard]},
  ]
  },
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {ColorService} from '../../service/color.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  public lineChartLegend = true;
  public lineChartType = 'line';

  // lineChart
  public lineChartData: Array<any> = [];
  // lineChartColors
  public lineChartColors: Array<any> = [];

  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };

  constructor(private dataSl: DataService, private colorSl: ColorService) { }
  ngOnInit() {
    this.lineChartData = this.dataSl.getData();
     // this.lineChartColors = this.colorSl.getColors();

  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
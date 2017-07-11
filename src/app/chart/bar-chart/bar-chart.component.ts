import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {ColorService} from '../../service/color.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartLegend = true;
  public barChartType = 'bar';

  // barChart
  public barChartData: Array<any> = [];
  // barChartColors
  public barChartColors: Array<any> = [];

  public barChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartOptions: any = {
    responsive: true
  };

  constructor(private dataSl: DataService, private colorSl: ColorService) { }
  ngOnInit() {
    this.barChartData = this.dataSl.getData();
     // this.barChartColors = this.colorSl.getColors();

  }

  // events
  public chartClicked(e: any): void {
    /*https://github.com/chartjs/Chart.js/issues/2292*/
    if (e.active.length > 0) {
      const datasetIndex = e.active[0]._datasetIndex;
      const dataIndex = e.active[0]._index;
      const dataObject = this.barChartData[datasetIndex].data[dataIndex].dataObject
      console.log(datasetIndex);
      console.log(dataIndex);
      console.log(dataObject);
    }
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}

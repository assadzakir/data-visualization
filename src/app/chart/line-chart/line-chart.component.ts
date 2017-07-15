import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {ColorService} from '../../service/color.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  public showLineChart = false;
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
  async ngOnInit() {
     this.lineChartData = await this.dataSl.getData();
     this.lineChartColors = this.colorSl.getColors();
     this.showLineChart = true;
  }

  // events
  public chartClicked(e: any): void {
    /*https://github.com/chartjs/Chart.js/issues/2292*/
    if (e.active.length > 0) {
      const datasetIndex = e.active[0]._datasetIndex;
      const dataIndex = e.active[0]._index;
      const dataObject = this.lineChartData[datasetIndex].data[dataIndex].dataObject
      console.log(datasetIndex);
      console.log(dataIndex);
      console.log(dataObject);
    }
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}

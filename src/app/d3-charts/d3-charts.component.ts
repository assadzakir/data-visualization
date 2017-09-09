import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d3-charts',
  templateUrl: './d3-charts.component.html',
  styleUrls: ['./d3-charts.component.css']
})
export class D3ChartsComponent implements OnInit {

  chartData: Array<any>;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.generateData();
      // change the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([`Index ${i}`, Math.floor(Math.random() * 100)]);
    }
  }
}

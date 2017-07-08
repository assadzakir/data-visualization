import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private Data: Array<any> = [
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'type1', type: 'line', stack: 3, fill: false},
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'type2', type: 'line', stack: 3, fill: false},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'type3', type: 'bar', stack: 3, fill: true }
  ];

  getData() {
    return this.Data;
  }

}

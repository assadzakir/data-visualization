import { Injectable } from '@angular/core';
import { ChartOutput } from '../models/charts.model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  constructor(private http: Http) {}

  private static handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  async getData()
  : Promise<ChartOutput[]> {
   return await this.http
      .get('https://datavisualization-f3d6b.firebaseio.com/data.json')
      .toPromise()
      .then(res => {
        return res.json() as ChartOutput;
      })
      .catch(DataService.handleError);

  }


}

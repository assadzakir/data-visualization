import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ChartOutput } from '../models/charts.model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  constructor(private http: Http, private authService: AuthService) {}

  private static handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  async getData()
  : Promise<ChartOutput[]> {
    const token = this.authService.getToken();
   return await this.http
      .get('https://datavisualization-f3d6b.firebaseio.com/data.json?auth=' + token)
      .toPromise()
      .then(res => {
        return res.json() as ChartOutput;
      })
      .catch(DataService.handleError);

  }


}

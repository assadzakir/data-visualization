import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {

  private Colors: Array<any> = [
    {
      backgroundColor: '#219A24',
      hoverBackgroundColor: '#249a1e',
      borderColor: '#1e9a1d',
      pointBackgroundColor: '#1d9a16',
      pointBorderColor: '#1e9a13',
      pointHoverBackgroundColor: '#219A24',
      pointHoverBorderColor: '#219A24'
    },
    {
      backgroundColor: '#F93602',
      hoverBackgroundColor: '#f94219',
      borderColor: '#f94219',
      pointBackgroundColor: '#F93602',
      pointBorderColor: '#F93602',
      pointHoverBackgroundColor: '#F93602',
      pointHoverBorderColor: '#F93602'
    },
    {
      backgroundColor: '#16329a',
      hoverBackgroundColor: '#0f1c9a',
      borderColor: '#15239a',
      pointBackgroundColor: '#0c159a',
      pointBorderColor: '#0a0b9a',
      pointHoverBackgroundColor: '#1e0d9a',
      pointHoverBorderColor: '#1f179a'
    }
  ];

  getColors() {
    return this.Colors;
  }

}

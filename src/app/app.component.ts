import { Component } from '@angular/core';

interface City {
  name: string,
  code: string
}
@
  Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
export class AppComponent {
  cities: City[];

  selectedCities: Array<any> = [
    'RM'
  ];

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  onSubmitTemplateBased() {
    console.log(this.selectedCities);
  }

  onChangeTriggered(event: any) {
    console.log(event);
  }
}

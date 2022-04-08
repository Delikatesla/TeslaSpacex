import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';

import { Button } from '../tesla/tesla.component';

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.scss']
})
export class SpaceXComponent {
  buttons!: Button[];
  currentToolbarEvent: any;
  rocketsStore: any;
  rockets!: Rocket[];


  constructor() {
    this.rockets = [{
        id: 1,
        title: 'Crew Dragon',
        launches: true
      }, {
        id: 2,
        title: 'Lizard',
        launches: false
      }, {
        id: 3,
        title: 'Falcon',
        launches: true
      }, {
        id: 4,
        title: 'Dragon',
        launches: true
      }, {
        id: 5,
        title: 'Zhuk Navoznik',
        launches: false
      }
    ];
    this.buttons = [{
      location: 'center',
      widget: 'dxButton',
      options: {
        icon: 'todo',
        text: 'Успешные запуски',
        onClick: () => {
          // this.rockets = this.rockets.filter(rocket => rocket.launches === true);
          this.rocketsStore.filter(['launches', '=', true]);
          this.rocketsStore.load();
        }
      }
    }, {
      location: 'center',
      widget: 'dxButton',
      options: {
        icon: 'close',
        text: 'нет запусков',
        onClick: () => {
          this.rocketsStore.filter(['launches', '=', false]);
          this.rocketsStore.load();
        } 
      }
    }, {
      location: 'center',
      widget: 'dxButton',
      options: {
        icon: 'globe',
        text: 'Все модели',
        onClick: () => {
          this.rocketsStore.filter(null);
          this.rocketsStore.load();
        } 
      }
    }];
    this.rocketsStore = new DataSource({
      store: new CustomStore({
        key: 'id',
        load: () => {
          return new Promise( (resolve, reject) => {
            resolve(this.rockets), reject('ашипка')
          })
        }
      })
    })

  }
  
  getClickInToolbarComponent(e:any) {
    console.warn(e);
    // alert('wow!')
    this.currentToolbarEvent = e;
  }

}

export class Rocket {
  id!: number;
  title!: string;
  launches!: boolean;
}

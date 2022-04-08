import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tesla',
  templateUrl: './tesla.component.html',
  styleUrls: ['./tesla.component.scss']
})
export class TeslaComponent {

  buttons: Button[];
  currentToolbarEvent: any;
  cars!: Car[];
  originalCars: Car[];
  categories!: Category[];

  isPopupShowed: boolean = false; 

  constructor() {
    this.categories = [{
      id: 1,
      text: 'Все модели'
    }, {
      id: 2,
      text: 'Реальные'
    }, {
      id: 3,
      text: 'Вымышленные'
    }];

    this.buttons = [{
      location: 'after',
      widget: 'dxSelectBox',
      options: {
        width: 140,
        items: this.categories,
        displayExpr: 'text',
        valueExpr: 'id',
        value: this.categories[0].id,
        onValueChanged: (x: { value: number; }) => {
          if (x.value === 2) {
            this.cars = this.originalCars.filter(car => car.existing === true);
          } else if (x.value === 3) {
            this.cars = this.originalCars.filter(car => car.existing === false);
          } else {
            this.cars = this.originalCars
          }
        }
      }
    }, {
      location: 'center',
      widget: 'dxButton',
      options: {
        icon: 'add',
        text: 'Добавить',
        onClick: () => {
          this.isPopupShowed = true;
        }
      }
    }];
    this.cars = [{
      id: 1,
      title: 'Model S',
      existing: true
    }, {
      id: 2,
      title: 'Model Nu',
      existing: false
    }, {
      id: 3,
      title: 'Model 3',
      existing: true
    }, {
      id: 4,
      title: 'Model Z',
      existing: false
    }, {
      id: 5,
      title: 'Model Y',
      existing: true
    }];
    this.originalCars = this.cars
  }

  getClickInToolbarComponent(e:any) {
    console.warn(e);
    // alert('wow!')
    this.currentToolbarEvent = e;
  }

  togglePopup(e:boolean) {
    this.isPopupShowed = e;
  }

  addNewCar(t: string) {
    let newCar = {id: this.cars.length + 1, title: t, existing: false}
    this.cars.push(newCar)
    console.log(this.cars)
  }
}

export class Button {

  location!: string;
  widget!: string;
  options!:{}

}

export class Car {
  id!: number;
  title!: string;
  existing!: boolean;
}

export class Category {
  id!: number;
  text!: string;
}




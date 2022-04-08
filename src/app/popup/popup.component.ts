import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Button } from '../tesla/tesla.component';
import { on, trigger, off } from "devextreme/events";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  buttons: Button[]
  @Input() isPopupVisible!: boolean;
  @Output() popupVisionEvent = new EventEmitter<boolean>();
  @Output() newItemEvent = new EventEmitter<string>(); 

  constructor() {
    this.buttons = [{
      location: 'center',
      widget: 'dxButton',
      options: {
        icon: 'plus',
        text: 'добавить модель',
        onClick: () => {
          this.isPopupVisible = false
          this.tooglePopupVision(this.isPopupVisible)
        }
      }
    }, {
      location: 'center',
      widget: 'dxButton',
      options: {
        icon: 'close',
        text: 'отменить',
        onClick: () => {
          this.isPopupVisible = false
          this.tooglePopupVision(this.isPopupVisible)
        }
      }
    }];
  }

  tooglePopupVision (value: boolean) {
    this.popupVisionEvent.emit(value);
  }

  addItem(value: string) {
    this.newItemEvent.emit(value);
  }

  // handleValueChange(e: any) {
  //   debugger
  //   const previousValue = e.previousValue;
  //   const newValue = e.value;
  //   console.log(previousValue)
  //   console.log(newValue)
  // }
}


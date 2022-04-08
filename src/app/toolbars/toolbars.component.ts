import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Button } from '../tesla/tesla.component';

@Component({
  selector: 'app-toolbars',
  templateUrl: './toolbars.component.html',
  styleUrls: ['./toolbars.component.scss'],
  providers: []
})
export class ToolbarsComponent {
  @Input() buttons: Button[] = [];
  @Output() clickEvent = new EventEmitter<any>();
  

  clickOnToolbarItem(e: any) {
    this.clickEvent.emit(e)

    console.log('click it', e)

  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxPopupModule, DxSelectBoxModule, DxTextBoxModule, DxToolbarModule } from 'devextreme-angular';
import { DxListModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarsComponent } from './toolbars/toolbars.component';
import { TeslaComponent } from './tesla/tesla.component';
import { SpaceXComponent } from './space-x/space-x.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarsComponent,
    TeslaComponent,
    SpaceXComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxToolbarModule,
    DxListModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxPopupModule,
    DxButtonModule,
    DxTextBoxModule,
    DxCheckBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

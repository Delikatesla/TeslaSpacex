import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceXComponent } from './space-x/space-x.component';
import { TeslaComponent } from './tesla/tesla.component';
import { ToolbarsComponent } from './toolbars/toolbars.component';

const routes: Routes = [
  { path: '', component: ToolbarsComponent },
  { path: 'tesla', component: TeslaComponent },
  { path: 'spacex', component: SpaceXComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

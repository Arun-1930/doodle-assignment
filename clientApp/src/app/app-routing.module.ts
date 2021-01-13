import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlotsComponent } from './slots/slots.component';
import { ListslotComponent } from './listslot/listslot.component';

const routes: Routes = [
  {
    path: 'slots',component : SlotsComponent
  },
  {
    path: 'slots/:date',component : ListslotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

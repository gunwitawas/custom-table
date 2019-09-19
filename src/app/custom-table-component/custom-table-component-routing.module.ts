import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableListsComponent } from './table-lists/table-lists.component';

const routes: Routes = [
  {
    path: '',
    component: TableListsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomTableComponentRoutingModule { }

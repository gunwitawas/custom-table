import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomTableComponentModule } from './custom-table-component/custom-table-component.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'table-lists',
    pathMatch: 'full'
  },
  {
    path: 'table-lists',
    loadChildren: './custom-table-component/custom-table-component.module.ts#CustomTableComponentModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CustomTableComponentModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

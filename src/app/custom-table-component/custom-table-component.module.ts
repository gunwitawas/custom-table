import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListsComponent } from './table-lists/table-lists.component';
import { CustomTableComponentRoutingModule } from './custom-table-component-routing.module';

@NgModule({
  declarations: [
    TableListsComponent
  ],
  imports: [
    CommonModule,
    CustomTableComponentRoutingModule
  ]
})
export class CustomTableComponentModule { }

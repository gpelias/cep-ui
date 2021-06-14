import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EstadoFormComponent} from './estado-form/estado-form.component';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/components/button/button';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [EstadoFormComponent],
  imports: [
    CommonModule,
    DataTableModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    DataViewModule,
    DropdownModule,
    PanelModule
  ],
  exports: [EstadoFormComponent]
})
export class EstadoModule {
}

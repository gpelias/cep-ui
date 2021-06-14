import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CidadeFormComponent} from './cidade-form/cidade-form.component';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableModule} from 'primeng/components/datatable/datatable';

@NgModule({
  declarations: [CidadeFormComponent],
  imports: [
    CommonModule,
    DataTableModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [CidadeFormComponent]
})
export class CidadeModule {
}

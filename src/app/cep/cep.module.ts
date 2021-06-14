import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {InputMaskModule} from 'primeng/components/inputmask/inputmask';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {CepFormComponent} from './cep-form/cep-form.component';

@NgModule({
  declarations: [CepFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InputMaskModule,
    DataTableModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    TooltipModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
  ], exports: [CepFormComponent],
  providers: []
})
export class CepModule {
}

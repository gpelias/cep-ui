import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CidadeFormComponent} from './cidade/cidade-form/cidade-form.component';
import {EstadoFormComponent} from './estado/estado-form/estado-form.component';
import {CepFormComponent} from './cep/cep-form/cep-form.component';


const routes: Routes = [
  {
    path: '',
    component: CidadeFormComponent
  },
  {
    path: 'cidade',
    component: CidadeFormComponent
  },
  {
    path: 'estado',
    component: EstadoFormComponent
  },
  {
    path: 'cep',
    component: CepFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

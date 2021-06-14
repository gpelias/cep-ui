import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CepModule} from './cep/cep.module';
import {CoreModule} from './core/core.module';
import {CidadeModule} from './cidade/cidade.module';
import {EstadoModule} from './estado/estado.module';
import {AppRoutingModule} from './app.routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CepModule,
    CoreModule,
    CidadeModule,
    EstadoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {Component, OnInit} from '@angular/core';
import {Content} from '../../shared/content';
import {EstadoService} from '../../estado/estado.service';
import {LazyLoadEvent} from 'primeng/api';
import {CepService} from '../cep.service';
import {CidadeService} from '../../cidade/cidade.service';
import {Cidade} from '../../cidade/cidade';
import {Estado} from '../../estado/estado';

@Component({
  selector: 'app-cep-form',
  templateUrl: './cep-form.component.html',
  styleUrls: ['./cep-form.component.css']
})
export class CepFormComponent implements OnInit {
  estados: Estado[];
  cidades: Cidade[];
  ceps: Content;
  cep: string;
  logradouro: string;
  bairro: string;
  cidade: Cidade;
  estado: Estado;
  size = 5;
  page = 0;
  exibirCidades = true;

  constructor(private cidadeService: CidadeService, private estadoService: EstadoService, private cepService: CepService) {
    this.reset();
    this.cepService.getEstados().subscribe(estados => this.estados = estados);
  }

  search() {
    this.cepService
      .search(this.cep,
        this.logradouro,
        this.bairro,
        this.cidade.id,
        this.estado.id,
        this.size,
        this.page).subscribe(ceps => this.ceps = ceps);
  }

  onPageChange(event: LazyLoadEvent) {
    this.cepService
      .onPageChange(
        this.cep,
        this.logradouro,
        this.bairro,
        this.cidade.id,
        this.estado.id,
        this.size,
        this.page,
        event)
      .subscribe(ceps => this.ceps = ceps);
  }

  getCidades() {
    this.exibirCidades = false;
    this.cepService.getCidades(this.estado).subscribe(cidades => this.cidades = cidades);
  }

  reset() {
    this.estado = new class implements Estado {
      estado = '';
      id = 0;
      sigla = '';
    };
    this.cidade = new class implements Cidade {
      cidade = '';
      id: 0;
      idEstado = 0;
    };
    this.exibirCidades = true;
    this.search();
  }

  ngOnInit() {
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {CidadeService} from '../cidade.service';
import {Estado} from '../../estado/estado';
import {LazyLoadEvent} from 'primeng/api';
import {Content} from '../../shared/content';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.css']
})
export class CidadeFormComponent implements OnInit {
  cidades: Content[];
  cidade = '';
  estados: Content;
  estado: Estado;
  size = 5;
  page = 0;

  constructor(private cidadeService: CidadeService) {
    this.cidadeService.getEstados()
      .subscribe(estados => this.estados = estados);
  }

  search() {
    let estadoId;
    if (this.estado !== null && typeof this.estado !== 'undefined') {
      estadoId = this.estado.id;
    } else {
      estadoId = 'undefined';
    }
    this.cidadeService.search(this.cidade, estadoId, this.size, this.page).subscribe(cidades => this.cidades = cidades);
  }

  onPageChange(event: LazyLoadEvent) {
    let estadoId;
    if (this.estado !== null && typeof this.estado !== 'undefined') {
      estadoId = this.estado.id;
    } else {
      estadoId = 'undefined';
    }
    this.cidadeService.onPageChange(this.cidade, estadoId, this.size, this.page, event)
      .subscribe(cidades => this.cidades = cidades);
  }

  ngOnInit() {
  }

}

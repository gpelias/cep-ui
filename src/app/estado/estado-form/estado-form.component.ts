import {Component, OnInit} from '@angular/core';
import {EstadoService} from '../estado.service';
import {LazyLoadEvent} from 'primeng/api';
import {Cidade} from '../../cidade/cidade';
import {Content} from '../../shared/content';

@Component({
  selector: 'app-estado-form',
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.css']
})
export class EstadoFormComponent implements OnInit {
  size = 5;
  page = 0;
  estados: Content;
  cidades: Cidade[];
  estado: string;

  constructor(private estadoService: EstadoService) {
  }

  search() {
    this.estadoService.search(this.estado, this.size, this.page).subscribe(estados => this.estados = estados);
  }

  onPageChange(event: LazyLoadEvent) {
    this.estadoService.onPageChange(this.estado, 5, 0, event).subscribe(estados => this.estados = estados);
  }

  ngOnInit() {
  }
}

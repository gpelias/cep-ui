import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LazyLoadEvent} from 'primeng/api';
import {Estado} from '../estado/estado';
import {Content} from '../shared/content';
import {Cidade} from '../cidade/cidade';

const estadoUrl = window.location.protocol + '//' + window.location.hostname + ':8080/estado/list';
const cidadeUrl = window.location.protocol + '//' + window.location.hostname + ':8080/cidade/';
const cepUrl = window.location.protocol + '//' + window.location.hostname + ':8080/cep?';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) {
  }

  // cep: number;
  // logradouro: string;
  // bairro: string;
  // fk_cidade: number;
  // fk_estado: number;


  search(
    cep: string,
    logradouro: string,
    bairro: string,
    fk_cidade: number,
    fk_estado: number,
    size: number,
    page: number) {
    const params = new HttpParams()
      .append('size', size.toString())
      .append('page', page.toString());
    return this.http.get<Content>(cepUrl + this.ifFilter(cep, logradouro, bairro, fk_cidade, fk_estado), {params});
  }

  onPageChange(cep: string,
               logradouro: string,
               bairro: string,
               fk_cidade: number,
               fk_estado: number,
               size: number,
               page: number,
               event: LazyLoadEvent) {
    return this.search(cep, logradouro, bairro, fk_cidade, fk_estado, size, (event.first / event.rows));
  }

  ifFilter(cep: string, logradouro: string, bairro: string, fk_cidade: number, fk_estado: number) {
    let filter = '';
    if (typeof cep !== 'undefined' && cep !== null) {
      if (cep.trim().length > 0) {
        filter += 'cep=' + cep;
      }
    }
    if (typeof logradouro !== 'undefined' && logradouro !== null) {
      if (logradouro.trim().length > 0) {
        if (filter === '') {
          filter += 'logradouro=' + logradouro;
        } else {
          filter += '&logradouro=' + logradouro;
        }
      }
    }
    if (typeof bairro !== 'undefined' && bairro !== null) {
      if (bairro.trim().length > 0) {
        if (filter === '') {
          filter += 'bairro=' + bairro;
        } else {
          filter += '&bairro=' + bairro;
        }
      }
    }
    if (fk_cidade > 0) {
      if (filter === '') {
        filter += 'idCidade=' + fk_cidade;
      } else {
        filter += '&idCidade=' + fk_cidade;
      }
    }
    if (fk_estado > 0) {
      if (filter === '') {
        filter += 'idEstado=' + fk_estado;
      } else {
        filter += '&idEstado=' + fk_estado;
      }
    }
    return filter;
  }

  getCidades(estado: Estado) {
    return this.http.get<Cidade[]>(cidadeUrl + estado.id);
  }

  getEstados() {
    return this.http.get<Estado[]>(estadoUrl);
  }
}

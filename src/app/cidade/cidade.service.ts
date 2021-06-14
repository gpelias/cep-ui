import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Cidade} from './cidade';
import {Estado} from '../estado/estado';
import {LazyLoadEvent} from 'primeng/api';
import {Content} from '../shared/content';

const estadoUrl = window.location.protocol + '//' + window.location.hostname + ':8080/estado/list';
const cidadeUrl = window.location.protocol + '//' + window.location.hostname + ':8080/cidade?';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) {
  }

  search(cidade: string, estado: number, size: number, page: number) {
    let filtro = '';
    const params = new HttpParams()
      .append('size', size.toString())
      .append('page', page.toString());
    if (typeof cidade !== 'undefined' && cidade !== null) {
      if (cidade.trim().length > 0) {
        filtro += 'cidade=' + cidade;
      }
    }
    if (estado > 0) {
      if (filtro === '') {
        filtro += 'idEstado=' + estado;
      } else {
        filtro += '&idEstado=' + estado;
      }
    }
    return this.http.get<Content[]>(cidadeUrl + filtro, {params});
  }

  onPageChange(cidade: string, estado: number, size: number, page: number, event: LazyLoadEvent) {
    return this.search(cidade, estado, size, (event.first / event.rows));
  }

  getEstados() {
    return this.http.get<Content>(estadoUrl);
  }
}

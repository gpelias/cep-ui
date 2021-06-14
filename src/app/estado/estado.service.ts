import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LazyLoadEvent} from 'primeng/api';
import {Content} from '../shared/content';

const estadoUrl = window.location.protocol + '//' + window.location.hostname + ':8080/estado?resumo';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) {
  }

  search(estado: string, size: number, page: number) {
    let filtro = '';
    const params = new HttpParams()
      .append('size', size.toString())
      .append('page', page.toString());
    if (typeof estado !== 'undefined' && estado !== null) {
      if (estado.trim().length > 0) {
        filtro = '&estado=' + estado;
      }
    }
    this.http.get<Content>(estadoUrl + filtro, {params})
      .subscribe(estados => {
      });
    return this.http.get<Content>(estadoUrl + filtro, {params});
  }

  onPageChange(estado: string, size: number, page: number, event: LazyLoadEvent) {
    return this.search(estado, size, (event.first / event.rows));
  }
}

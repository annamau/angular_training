import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  retornar(){
    return [{
      codigo: '1',
      descripcion: 'papas',
      precio: 12.33,

    },{
    codigo: '1',
      descripcion: 'manzanas',
      precio: 54,

    },{
    codigo: '1',
      descripcion: 'sandias',
      precio: 14,

    }]
  }
}

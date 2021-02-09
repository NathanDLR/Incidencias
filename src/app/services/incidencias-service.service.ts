import { Injectable } from '@angular/core';
import { Incidencia } from '../classes/incidencia';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasServiceService {

  autoincrement = 0;
  id: number;
  incidencias: Incidencia[];
  cloneIncidencias: Incidencia[];
  ind: number;

  constructor() {
    this.incidencias = [];
  }

  // Add incidencia to array 
  addIncidencia(incidencia: Incidencia){
    this.incidencias.push(incidencia);
  }

  // Delete incidencia from array
  deleteIncidencia(incidencia: Incidencia){
    let i = this.incidencias.indexOf(incidencia);
    this.incidencias.splice(i, 1);
  }

  // Create new Incidencia
  createNewIncidencia(name: String, description: String, date: Date, solved: Boolean){
    this.autoincrement++;
    this.id = this.autoincrement;
    return new Incidencia(this.id, name, description, date, solved);
  }

  // Return a copy of the original array
  getIncidencias(){
    return this.cloneIncidencias = Array.from(this.incidencias);
  }


}

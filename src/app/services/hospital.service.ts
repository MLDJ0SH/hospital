import { HospitalesModule } from '../models/hospitales.module';
import { Injectable } from '@angular/core';
import { Hospital } from '../models/hospitales.module';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  // Array simulado como "base de datos" temporal
  private hospitals: Hospital[] = [];
  constructor() {}

  // Método para obtener todos los hospitales
  getHospitals(): Observable<Hospital[]> {
    return of(this.hospitals);
  }

  // Método para añadir un nuevo hospital
  addHospital(hospital: Hospital): void {
    hospital.id = this.hospitals.length + 1;
    hospital.registrationDate = new Date();
    this.hospitals.push(hospital);
  }

  updateHospital(hospital: Hospital): void {
    const index = this.hospitals.findIndex(h => h.id === hospital.id);
    if (index > -1) {
      this.hospitals[index] = hospital;
    }
  }

  // Método para eliminar un hospital
  deleteHospital(id: number): void {
    this.hospitals = this.hospitals.filter(h => h.id !== id);
  }

  // Método para obtener un hospital por ID (opcional)
  
  }

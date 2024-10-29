import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule
  ],
})
export class HospitalesModule {}
export interface Hospital {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  description?: string;
  phone?: string;
  email?: string;
  imageUrl?: string;
  registrationDate: Date;
  location: { lat: number, lng: number };
}
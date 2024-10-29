import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalService } from './../../services/hospital.service';
import { Hospital } from '../../models/hospitales.module';




@Component({
  selector: 'app-hospital-form',
  standalone: true,
  imports: [],
  templateUrl: './hospital-form.component.html',
  styleUrl: './hospital-form.component.css'
})
export class HospitalFormComponent {
  hospitalForm:FormGroup;
  constructor(private fb:FormBuilder,private hospitalService: HospitalService){

    this.hospitalForm = this.fb.group({
      name: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    postalCode: ['', Validators.required],
    description: [''],
    phone: [''],
    email: ['', Validators.email],
    imageUrl: [''],
    location: this.fb.group({ 
      lat: [0, Validators.required],
       lng: [0, Validators.required] 
      })

    });

  }
  onSubmit(): void {
    if (this.hospitalForm.valid) {
      const hospital: Hospital = this.hospitalForm.value;
      this.hospitalService.addHospital(hospital);
      this.hospitalForm.reset();
    // Leer el archivo y establecer URL para vista previa
  }
  
  }
}


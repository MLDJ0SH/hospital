import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../services/hospitales.service';
import { Hospital } from '../models/hospital.model';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  hospitals: Hospital[] = [];

  constructor(private hospitalService: HospitalService) {}

  ngOnInit(): void {
    this.hospitalService.getHospitals().subscribe(hospitals => {
      this.hospitals = hospitals;
    });
  }
}


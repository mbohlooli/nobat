import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../models/doctor";
import {ActivatedRoute} from "@angular/router";
import {Doctors, Expertises} from "../../data";
import {MatIcon} from "@angular/material/icon";
import {Appointment} from "../../models/appointment";
import {MatDialog} from "@angular/material/dialog";
import {ReservationDialogComponent} from "../reservation-dialog/reservation-dialog.component";

@Component({
  selector: 'doctor-info',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: 'doctor-info.component.html'
})

export class DoctorInfoComponent implements OnInit {
  doctor!: Doctor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (!params.has("id")) return;

      let foundDoctor = Doctors.find(doctor => doctor.id.toString() == params.get('id'));
      if (foundDoctor)
        this.doctor = foundDoctor;
    });
  }

  getExpertise(doctor: Doctor): string {
    return Expertises.find(expertise => expertise.id == doctor.expertiseId)?.name ?? "";
  }

  openReservationDialog(appointment: Appointment) {
    let dialogRef = this.dialog.open(ReservationDialogComponent, {data: {appointment}});

    dialogRef.afterClosed().subscribe(selectedTime => {
      if (selectedTime) alert(selectedTime);
    })
  }
}

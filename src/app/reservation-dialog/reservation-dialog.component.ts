import {Component, Inject} from '@angular/core';
import {Appointment} from "../../models/appointment";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-reservation-dialog',
  standalone: true,
  imports: [
    MatRadioGroup,
    MatRadioButton,
    FormsModule
  ],
  templateUrl: './reservation-dialog.component.html',
})
export class ReservationDialogComponent {
  selectedTime: number = -1;

  constructor(
    private dialogRef: MatDialogRef<ReservationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {appointment: Appointment}
  ) {}

  getTime() {
    this.dialogRef.close(this.selectedTime == -1 ? '' : this.data.appointment.times[this.selectedTime]);
  }
}

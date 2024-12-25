import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../models/doctor";
import {Cities, Doctors, Expertises, Neighbourhoods} from "../../data";
import {Expertise} from "../../models/expertise";
import {City} from "../../models/city";
import {Neighbourhood} from "../../models/neighbourhood";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {NgClass} from "@angular/common";

@Component({
  selector: 'name',
  standalone: true,
  imports: [RouterOutlet, MatIcon, ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  public doctors: Doctor[] = Doctors;
  public expertises: Expertise[] = Expertises;
  public cities: City[] = Cities;
  public neighbourhoods: Neighbourhood[] = [];

  private search = new FormControl('');
  private city = new FormControl('');
  private neighbourhood = new FormControl('');

  public filters = new FormGroup({
    search: this.search,
    city: this.city,
    neighbourhood: this.neighbourhood
  });

  public currentExpertiseId = 0;

  ngOnInit() {
    this.filters.valueChanges
      .subscribe(({search, city, neighbourhood}) => {
        this.doctors = Doctors;
        this.cities = Cities;
        this.neighbourhoods = [];

        if (search)
          this.doctors = this.doctors.filter(doctor => doctor.name.includes(search));
        if (city) {
          this.doctors = this.doctors.filter(doctor => doctor.cityId.toString() == city);
          this.neighbourhoods = Neighbourhoods.filter(neighbourhood => neighbourhood.cityId.toString() == city);
        }
        if (neighbourhood)
          this.doctors = this.doctors.filter(doctor => doctor.neighbourhoodId.toString() == neighbourhood);
      });
  }

  filterByExpertise(expertiseId: number) {
    this.filters.setValue({search: '', neighbourhood: '', city: ''});

    this.currentExpertiseId = expertiseId;
    if (this.currentExpertiseId)
      this.doctors = this.doctors.filter(doctor => doctor.expertiseId == expertiseId);
  }

  getCity(doctor: Doctor): string {
    return Cities.find(city => city.id == doctor.cityId)?.name ?? "";
  }

  getNeighbourhood(doctor: Doctor): string {
    return Neighbourhoods.find(neighbourhood => neighbourhood.id == doctor.neighbourhoodId)?.name ?? "";
  }

  getExpertise(doctor: Doctor): string {
    return Expertises.find(expertise => expertise.id == doctor.expertiseId)?.name ?? "";
  }
}

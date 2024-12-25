import {Appointment} from "./appointment";

export interface Doctor {
  id: number;
  name: string;
  expertiseId: number;
  neighbourhoodId: number;
  cityId: number;
  address: string;
  appointments: Appointment[]
}

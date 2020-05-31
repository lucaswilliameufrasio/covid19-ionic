import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Covid19brazilService } from "../api/covid19brazil.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  response: Object;

  constructor(private covid19brazil: Covid19brazilService) {}

  ionViewWillEnter() {
    this.getBrazilCovidInformation();
  }

  getBrazilCovidInformation() {
    return this.covid19brazil
      .getEpidemiologicalStateFromBrazil()
      .subscribe((cases) => (this.response = cases));
  }
}

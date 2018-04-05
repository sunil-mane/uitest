import { Component } from "@angular/core";
import { IVM } from "./models/ivm";
import { VmService } from "./services/vm.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  vmData$: Observable<IVM>;
  constructor(private vmService: VmService) {
    this.vmData$ = this.vmService.getVM();
  }
}

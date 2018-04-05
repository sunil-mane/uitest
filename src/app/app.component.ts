import { Component } from "@angular/core";
import { IVM } from "./models/ivm";
import { VmService } from "./services/vm.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  vmData: IVM;
  constructor(private vmService: VmService) {
    this.vmService
      .getVM()
      .subscribe((response: IVM) => (this.vmData = response));
  }
}

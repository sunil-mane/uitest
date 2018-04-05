import { Component, OnInit, Input } from "@angular/core";
import { IVM } from "../../models/ivm";

@Component({
  selector: "app-vm",
  templateUrl: "./vm.component.html",
  styleUrls: ["./vm.component.css"]
})
export class VmComponent implements OnInit {
  @Input() vm: IVM;
  constructor() {}

  ngOnInit() {}
  
}

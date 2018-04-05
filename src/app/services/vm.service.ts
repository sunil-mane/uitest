import { Injectable } from "@angular/core";
import { Observable } from "rxjs/observable";
import { VMData } from "../../mock/data/vm";
import { IVM } from "../models/ivm";

@Injectable()
export class VmService {
  constructor() {}
  getVM() {
    return new Observable<IVM>(observer => {
      observer.next(VMData);
      observer.complete();
    });
  }
}

import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VmComponent } from "./vm.component";
import { IVM } from "../../models/ivm";
import { VMData } from "../../../mock/data/vm";

describe("VmComponent", () => {
  let component: VmComponent;
  let fixture: ComponentFixture<VmComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [VmComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(VmComponent);
    component = fixture.componentInstance;
    component.vm = VMData;
  });

  it("should create VM component", () => {
    expect(component).toBeTruthy();
  });

  it("should call init", () => {
    let spy = spyOn(component, "ngOnInit");
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it("should have VM status either ERROR or OK", ()=>{
    fixture.detectChanges();
    expect(['ERROR','OK']).toContain(component.vm.currentStatus);
  });
});

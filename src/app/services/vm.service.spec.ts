import { TestBed, inject } from "@angular/core/testing";
import { VmService } from "./vm.service";

describe("VmService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VmService]
    });
  });

  it(
    "should create VM Service",
    inject([VmService], (service: VmService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    "should return VM",
    inject([VmService], (service: VmService) => {
      service.getVM().subscribe(response => expect(response).toBeTruthy());
    })
  );
});

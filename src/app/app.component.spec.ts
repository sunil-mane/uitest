import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { VmComponent } from './components/vm/vm.component';
import { VmService } from './services/vm.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        VmComponent
      ],
      providers: [VmService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

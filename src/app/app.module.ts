import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VmComponent } from './components/vm/vm.component';
import { VmService } from './services/vm.service';


@NgModule({
  declarations: [
    AppComponent,
    VmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [VmService],
  bootstrap: [AppComponent]
})
export class AppModule { }

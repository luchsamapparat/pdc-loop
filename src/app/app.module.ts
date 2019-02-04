import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BarFormComponent } from './bar-form/bar-form.component';
import { FooFormComponent } from './foo-form/foo-form.component';
import { LoopComponent } from './loop/loop.component';

@NgModule({
  declarations: [
    AppComponent,
    LoopComponent,
    FooFormComponent,
    BarFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

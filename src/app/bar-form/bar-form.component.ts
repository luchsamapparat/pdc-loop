import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pdc-bar-form',
  templateUrl: './bar-form.component.html',
  styleUrls: ['./bar-form.component.css']
})
export class BarFormComponent {

  @Output()
  statusChange = new EventEmitter<boolean>();

  title = 'Bar Form';

  isValid = true;

  onChange() {
    this.statusChange.emit(this.isValid);
  }

}

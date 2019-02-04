import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pdc-foo-form',
  templateUrl: './foo-form.component.html',
  styleUrls: ['./foo-form.component.css']
})
export class FooFormComponent {

  @Output()
  statusChange = new EventEmitter<boolean>();

  title = 'Foo Form';

  isValid = true;

  onChange() {
    this.statusChange.emit(this.isValid);
  }

}

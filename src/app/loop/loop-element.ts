import { EventEmitter } from '@angular/core';

export interface LoopElement {

  title: string;
  statusChange: EventEmitter<boolean>;

}

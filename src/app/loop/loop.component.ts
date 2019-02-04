import { AfterViewChecked, Component, ContentChildren, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { isUndefined } from 'lodash';
import { Subscription } from 'rxjs';
import { LoopElement } from './loop-element';

interface LoopElementStatus {
  title: string;
  isValid: boolean;
}

@Component({
  selector: 'pdc-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnDestroy, AfterViewChecked {

  @ContentChildren('loopElement')
  set loopElements(loopElements: LoopElement[]) {
    this.loopElementStatus = [];
    this.unsubscribeFromLoopElements();

    this.subscriptions = loopElements
      .map((loopElement, index) => this.subscribeToLoopElement(loopElement, index))
      .filter(subscription => !isUndefined(subscription));
  }

  @ViewChild('tabContent')
  tabContent: ElementRef;

  activeTab = 0;

  loopElementStatus: LoopElementStatus[] = [];

  private subscriptions: Subscription[] = [];

  get isValid() {
    return this.loopElementStatus.reduce(
      (isValid, loopElement) => isValid && loopElement.isValid,
      true
    );
  }

  activateTab(index: number) {
    this.activeTab = index;

    Array.from((<HTMLDivElement> this.tabContent.nativeElement).children)
      .forEach((element: HTMLElement, i) => element.style.display = (i === index) ? 'block' : 'none');
  }

  ngAfterViewChecked() {
    this.activateTab(this.activeTab);
  }

  ngOnDestroy() {
    this.unsubscribeFromLoopElements();
  }

  private subscribeToLoopElement(loopElement: LoopElement, index: number) {
    if (isUndefined(loopElement.statusChange)) {
      return;
    }

    this.loopElementStatus[index] = {
      title: loopElement.title,
      isValid: true
    };

    return loopElement.statusChange
      .subscribe((isValid: boolean) => this.loopElementStatus[index] = {
        ...this.loopElementStatus[index],
        isValid
      });
  }

  private unsubscribeFromLoopElements() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}

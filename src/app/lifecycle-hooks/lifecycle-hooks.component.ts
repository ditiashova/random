import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges, OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.sass']
})
export class LifecycleHooksComponent implements
  OnInit, OnChanges, OnDestroy, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
  public log: string;
  public hooksLog = '';
  private i = 0;

  @Input() title: string;
  @Input() description?: string;

  constructor() { }

  logger (hook: string) {
    const currentHook = `#${this.i}: ${hook}`;
    this.hooksLog += '<br/>' + currentHook;
    console.log(currentHook);
    if (this.i === 7) {
      this.log = `<pre>${this.hooksLog}</pre>`;
    }
    this.i++;
  }

  /**
   * Respond when Angular (re)sets data-bound input properties.
   * The method receives a SimpleChanges object of current and previous property values.
   * Called before ngOnInit() and whenever one or more data-bound input properties change.
   */
  ngOnChanges () {
    this.logger('ngOnChanges');
  }

  /**
   * Initialize the directive/component after Angular first displays
   * the data-bound properties and sets the directive/component's input properties.
   * Called once, after the first ngOnChanges().
   */
  ngOnInit () {
    this.logger('ngOnInit');
  }

  /**
   * Detect and act upon changes that Angular can't or won't detect on its own.
   * Called during every change detection run, immediately after ngOnChanges() and ngOnInit().
   */
  ngDoCheck () {
    this.logger('ngDoCheck');
  }

  /**
   * Respond after Angular projects external content into the component's view / the view that a directive is in.
   * Called once after the first ngDoCheck().
   */
  ngAfterContentInit () {
    this.logger('ngAfterContentInit');
  }

  /**
   * Respond after Angular checks the content projected into the directive/component.
   *Called after the ngAfterContentInit() and every subsequent ngDoCheck().
   */
  ngAfterContentChecked () {
    this.logger('ngAfterContentChecked');
  }

  /**
   * Respond after Angular initializes the component's views and child views / the view that a directive is in.
   * Called once after the first ngAfterContentChecked().
   */
  ngAfterViewInit () {
    this.logger('ngAfterViewInit');
  }

  /**
   * Respond after Angular checks the component's views and child views / the view that a directive is in.
   * Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
   */
  ngAfterViewChecked () {
    this.logger('ngAfterViewChecked');
  }

  /**
   * Cleanup just before Angular destroys the directive/component.
   * Unsubscribe Observables and detach event handlers to avoid memory leaks.
   * Called just before Angular destroys the directive/component.
   */
  ngOnDestroy () {
    this.logger('ngOnDestroy');
  }
}

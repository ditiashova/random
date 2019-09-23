import {Component, Input, OnInit} from '@angular/core';
import {LABELS} from '../../labels';

@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  styleUrls: ['./es6.component.sass']
})
export class Es6Component implements OnInit {
  @Input() title: string;
  @Input() description: string;

  private generatorResult = '';
  private headerLabels = LABELS.HEADERS;
  constructor() { }

  ngOnInit() {}

  generate(): void {
    for (let code of generatePasswordCodes()) {
      this.generatorResult += String.fromCharCode(code);
    }
  }
}

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {
  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);
}

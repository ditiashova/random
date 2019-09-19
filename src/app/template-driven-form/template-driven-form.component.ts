import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.sass']
})
export class TemplateDrivenFormComponent implements OnInit {

  @Input() title: string;
  @Input() description?: string;

  constructor() { }

  ngOnInit() {
  }

}

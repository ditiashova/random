import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {User} from '../services/user.interface';
import {FOOD} from '../../../mocks/food.fixture';
import {LABELS} from '../../labels';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.sass']
})
export class TemplateDrivenFormComponent implements OnInit {
  @Input() title: string;
  @Input() description?: string;

  public user: User;
  public food = FOOD;
  public inputLabels = LABELS.INPUTS;
  public buttonLabels = LABELS.BUTTONS;

  private submitted = false;

  constructor(
    private readonly apiService: ApiService
  ) { }

  ngOnInit() {
    this.user = this.apiService.loadUserData(Math.floor(Math.random() * 6));
  }

  onSubmit() {
    this.submitted = true;
  }
}

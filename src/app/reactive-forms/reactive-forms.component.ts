import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LABELS} from '../../labels';
import {FOOD} from '../../../mocks/food.fixture';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.sass']
})
export class ReactiveFormsComponent implements OnInit {
  @Input() title: string;
  @Input() description?: string;

  public food = FOOD;
  public inputLabels = LABELS.INPUTS;
  public buttonLabels = LABELS.BUTTONS;

  private user: FormGroup;
  private submitted = false;

  constructor(
    private readonly apiService: ApiService
  ) { }

  ngOnInit() {
    const userData = this.apiService.loadUserData(Math.floor(Math.random() * 6));
    this.user = new FormGroup({
      name: new FormControl(userData.name),
      age: new FormControl(userData.age),
      favoriteFood: new FormControl(userData.favoriteFood)
    });
  }

  onSubmit() {
    this.submitted = true;
  }

}

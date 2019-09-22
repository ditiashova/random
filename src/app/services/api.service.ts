import {Injectable} from '@angular/core';
import {User} from './user.interface';
import { usersFixture} from '../../../mocks/user.model.fixture';

@Injectable()
export class ApiService {
  constructor() {  }

  public loadUserData(id: number): User {
    return usersFixture.find(user => user.id === id);
  }
}

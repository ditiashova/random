import {User} from '../src/app/services/user.interface';
import {FOOD} from './food.fixture';

export const usersFixture: Array<User> = [
  {
    id: 5,
    age: Math.round(Math.random() * 10),
    name: Math.random().toString(36).substring(7),
    isStatic: Math.random() >= 0.5,
    favoriteFood: FOOD[Math.floor(Math.random() * 6)]
  },
  {
    id: 3,
    age: Math.round(Math.random() * 10),
    name: Math.random().toString(36).substring(7),
    isStatic: Math.random() >= 0.5,
    favoriteFood: FOOD[Math.floor(Math.random() * 6)]
  },
  {
    id: 2,
    age: Math.round(Math.random() * 10),
    name: Math.random().toString(36).substring(7),
    isStatic: Math.random() >= 0.5,
    favoriteFood: FOOD[Math.floor(Math.random() * 6)]
  },
  {
    id: 1,
    age: Math.round(Math.random() * 10),
    name: Math.random().toString(36).substring(7),
    isStatic: Math.random() >= 0.5,
    favoriteFood: FOOD[Math.floor(Math.random() * 6)]
  },
  {
    id: 4,
    age: Math.round(Math.random() * 10),
    name: Math.random().toString(36).substring(7),
    isStatic: Math.random() >= 0.5,
    favoriteFood: FOOD[Math.floor(Math.random() * 6)]
  },
  {
    id: 0,
    age: Math.round(Math.random() * 10),
    name: Math.random().toString(36).substring(7),
    isStatic: Math.random() >= 0.5,
    favoriteFood: FOOD[Math.floor(Math.random() * 6)]
  }
];

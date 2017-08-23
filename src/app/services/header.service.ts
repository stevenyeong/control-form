import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

  constructor() { }

  public getTilesData(): any {
    return [{
      id: 1,
      display: 'home',
      route: '/home',
      type: 1,
    }, {
      id: 2,
      display: 'product',
      route: '/product',
      type: 1
    }, {
      id: 3,
      display: 'about us',
      route: '/about-us',
      type: 1
    }, {
      id: 4,
      parentId: 2,
      display: 'gown',
      route: '/gown',
      type: 2
    }, {
      id: 5,
      parentId: 2,
      display: 'evening dress',
      route: '/eventing-dress',
      type: 2
    }];
  }

}

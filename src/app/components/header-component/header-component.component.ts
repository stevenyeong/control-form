import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../services/header.service';
import { Tile } from './../../classes/tile';
import { TileType } from './../../enum/header.enum';

@Component({
  selector: 'header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  public mainMenus: Tile[];
  constructor(private headerSvc: HeaderService) { }

  ngOnInit() {
    this.mainMenus = this.getMainMenuTiles();
  }

  private getMainMenuTiles(): Tile[] {
    const tiles: Tile[] = [];
    const tilesData = this.headerSvc.getTilesData();
    if (tilesData) {
      for (let td of tilesData) {
        if (td.type !== TileType.Main) {
          continue;
        }
        const menuTile = {
          id: td.id,
          display: td.display,
          route: td.route
        };
        tiles.push(menuTile);
      }
    }
    return tiles;
  }

}

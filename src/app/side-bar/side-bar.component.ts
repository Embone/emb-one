import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NewType } from './NewType';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent{

  @ViewChild(MatSidenav)
 sidenav!: MatSidenav;

  constructor(private observer: NewType) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res: { matches: any; }): void => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}

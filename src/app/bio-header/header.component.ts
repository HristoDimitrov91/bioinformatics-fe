import { AfterViewInit, Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  @Output() public sidenavToggle = new EventEmitter();

  ngAfterViewInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}

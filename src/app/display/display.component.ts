import { Component, OnInit, Input } from '@angular/core';
import { FinderComponent } from '../finder/finder.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() profile;

  constructor(private user: FinderComponent) { }

  ngOnInit() {
  }
}

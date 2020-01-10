import { Component, OnInit, AfterViewInit } from '@angular/core';
import Plyr from 'plyr';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    const player = new Plyr('#player');
  }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import Plyr from 'plyr';
@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit, AfterViewInit {
  
  b:string='Soy B-Interpolacion';
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    const player = new Plyr('#player');
  }
}

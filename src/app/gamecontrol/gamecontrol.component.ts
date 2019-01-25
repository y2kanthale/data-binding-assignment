import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastnumber = 0;

  constructor() { }

  ngOnInit() {
  }
  OnStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastnumber + 1);
      this.lastnumber++;
    }, 1000);
  }
  OnEndGame(){
    clearInterval(this.interval);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifairs } from '../../models/fairs.interface';

@Component({
  selector: 'app-fairs-cards',
  templateUrl: './fairs-cards.component.html',
  styleUrls: ['./fairs-cards.component.scss']
})
export class FairsCardsComponent implements OnInit {

  @Input() getFairs !: Ifairs 

@Output()  emitFairId : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectFairs(fair  : Ifairs){
    console.log(this.getFairs.fairId);
    // console.log(this.getFairs);
    this.emitFairId.emit(this.getFairs.fairId)

  }

}

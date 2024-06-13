import { Component, OnInit } from '@angular/core';
import { fairsArr } from '../../const/fairsdata';
import { Ifairs } from '../../models/fairs.interface';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.scss']
})
export class FairDashboardComponent implements OnInit {

  fairsArray = fairsArr

  selectedFair !: Ifairs

  constructor() { }

  ngOnInit(): void {
    this.selectedFair = this.fairsArray[0]
  }

  onEmitId(id : Ifairs){
      console.log(id.fairId);
      // console.log(id);
      this.selectedFair = this.fairsArray.find(fair => fair.fairId === id.fairId)!
      // this.selectedFair = id;
      
  }
}

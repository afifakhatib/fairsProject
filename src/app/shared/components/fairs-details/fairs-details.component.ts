import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from '../../models/fairs.interface';

@Component({
  selector: 'app-fairs-details',
  templateUrl: './fairs-details.component.html',
  styleUrls: ['./fairs-details.component.scss']
})
export class FairsDetailsComponent implements OnInit {
@Input() getSelectedFair !: Ifairs
  constructor() { }

  ngOnInit(): void {
  }

}

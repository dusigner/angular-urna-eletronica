import { Component, OnInit } from '@angular/core';

import { UrnaService } from '../services';

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.css']
})
export class UrnaComponent implements OnInit {

  constructor(private urnaService: UrnaService) { }

  ngOnInit() {
  }

}

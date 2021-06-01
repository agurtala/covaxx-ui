/*// ************************** Alfiyyah's Contribution *********************!/*/

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    public api: ApiService
  ) { }
  title1 = 'WELCOME TO COVAXX';
  ngOnInit(): void {
}

}

/*// ************************** Alfiyyah's Contribution *********************!/*/

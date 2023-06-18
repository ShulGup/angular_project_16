import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
@Input() goals: any;
@Input() id!: string;


constructor(private _data: DataService, private router: Router) {
}

ngOnInit() {
  this._data.goal.subscribe(res => this.goals = res);
}
// @Input() queryParamName!: string;
sendMeHome() {
  this.router.navigate([''])
}
}

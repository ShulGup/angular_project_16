import { Component, OnInit} from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styles:[`
  //   p {
  //     font-weight: bold }
  //     div {
  //       color: gray
  //     }
  // `]
  styleUrls: ['./home.component.scss'],
  animations : [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
        ]))
      ]), {optional: true}),
      query(':leave', stagger('300ms', [
        animate('.6s ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(0)', offset: 0}),
          style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
          style({opacity: 1, transform: 'translateY(-75%)', offset: 1}),
      ]))
    ]), {optional: true}),
    ])
  ])
]
})
export class HomeComponent implements OnInit{
  
  public itemCount: number = 0;
  public btnText: string = 'Add an item';
  public goalText: string = 'first goal text';
  public goals: any = [];
  
  constructor(private _data: DataService) {}
  
  ngOnInit() {
    this.itemCount = this.goals.length;
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
    // console.log("itemcount1", this.itemCount);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
    // console.log("itemcount_add", this.itemCount);
  }
  removeItem(i:any) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
    // console.log("itemcount_remove", this.itemCount);
  }
  

}

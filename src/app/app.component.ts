import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { RandomService } from './random.service'

@Component({
  selector: 'my-app',
  template: `<h2>
    <h1> <font color="{{color}}">{{verb}}</font>
    </h1>
  </h2>`
})

export class AppComponent {
  title = 'rxjs-generator';
  name = 'Angular';
  randomNumber: any;
  randomNumberList: any[] = [];
  verb = '';
  color = 'green';

  constructor(
    private randomService: RandomService,
  ) { }

  ngOnInit() {
    const timeInterval = interval(3000);
    timeInterval.subscribe(x => {
      console.log('Next: ', x)
      this.verb = this.randomService.makestring(5);
      this.color = this.randomService.getColor(this.verb)
    });
  }
}

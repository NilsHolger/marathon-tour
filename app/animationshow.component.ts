import { Component } from '@angular/core';

import { Marathons } from './marathon.animation.service';

@Component({
  selector: 'marathon-animation-show',
  template: `
      <div>
        <marathon-list-enter-leave [marathons]=marathons></marathon-list-enter-leave>
      </div>
  `,
  styles: [`
    .buttons {
      text-align: center;
    }
    button {
      padding: 1.5em 3em;
    }
    .columns {
      display: flex;
      flex-direction: row;
    }
    .column {
      flex: 1;
      padding: 10px;
    }
    .column p {
      min-height: 6em;
    }
  `],
  providers: [Marathons]
})
export class AnimationShowComponent {
  constructor(private marathons: Marathons) { }
}

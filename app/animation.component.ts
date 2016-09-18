import {
  Component,
  Input,
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';

import { Marathons } from './marathon.animation.service';

@Component({
  moduleId: module.id,
  selector: 'marathon-list-enter-leave',
  template: `
    <ul>
      <li *ngFor="let marathon of marathons"
          [@flyInOut]="'in'">
        {{marathon.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AnimationComponent {
  @Input() marathons: Marathons;
  
}



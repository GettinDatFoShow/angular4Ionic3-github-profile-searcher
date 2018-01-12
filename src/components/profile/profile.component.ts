import { User } from './../../models/user.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {

  @Input() user: User;
  @Input() username: string;
  
  constructor() {

  }

}

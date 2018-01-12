import { User } from './../../models/user.interface';
import { GithubService } from './../../providers/github.service';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Repository } from '../../models/repository.interface';

@IonicPage({
  segment: 'profile-search/results/:username'
})
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {

  username: string;
  user: User;
  repositories: Repository[];

  constructor(private navParams: NavParams, private github: GithubService) {
  }

  getUserInformation():void {
    this.github.getUserInformation(this.username).subscribe((data: User) => this.user = data);
    // this.github.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
    this.github.getRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if (this.username){
      this.getUserInformation();
    }
  }

}

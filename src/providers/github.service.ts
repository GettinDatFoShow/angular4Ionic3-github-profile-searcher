import { REPOSITORY_LIST } from './../mocks/repository.mocks';
import { USER_LIST } from './../mocks/user.mocks';
import { User } from './../models/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Repository } from '../models/repository.interface';


@Injectable()
export class GithubService {

  private baseUrl: string = "https://api.github.com/users";

  constructor(private http: HttpClient) {
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
    .do(this.logData)
    .map(this.extractData)
    .catch(this.handleError);
  }

  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/repos`)
    .do(this.logData)
    .map(this.extractData)
    .catch(this.handleError);
  }
  /*
    Finding the username from within the USER_LIST, equal to the Username passed in 
    returning the results as an Observable
  */
  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.login.toLowerCase() === username.toLowerCase() )[0]);
  }

    /*
    Finding the repositories from within the REPOSITORY_LIST, equal to the Username passed in 
    returning the results as an Observable
  */
  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.login.toLowerCase() === username.toLowerCase() ));
  }

  private extractData(response: Response): Response {
    return response;
  }

  private logData(response: Response): void {
    console.log(response);
  }

  private handleError(error: Response | any) : Observable<any> {
    return Observable.throw(error || "Server Error.");
  }
}

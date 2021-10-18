import { Injectable } from '@angular/core';
//addes lines below from default
import { Http, Headers } from '@angular/http';

import { map } from 'rxjs/operators';
//import { map } from 'rxjs/add/operator/map';
//import 'rxjs/add/operator/map';
//adding the line below to try and fix map issue
//import { from, Observable } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' //we declare that this service should be created by the root application injector.
})
export class SearchService {

  //lets create properties below to avoid search limitations
  private username:string;
  private clientid ='cad08ebafb9bb94cc353';
  private clientsecret ='21ae41656595ef9e5b84cf04c53238d8c4aaabf7';

  constructor(private http:Http) {
    //add a message to console to check if service is running
    console.log("service is now ready!");
    this.username = 'mikewanya';
   }

   //fenction to get data friom github application
   getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  .pipe(map(res => res.json())); /*	.map(res => res.json());*/
  }

  //GET REPOS FROM GithubSearch
  getProfileRepos() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      .pipe(map(res => res.json()));
  }

  //the code below is for username

  updateProfile(username:string){
  	this.username = username;
  }

}

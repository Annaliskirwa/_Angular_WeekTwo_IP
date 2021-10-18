import { Component, OnInit } from '@angular/core';

// imports
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
//phase 2 profile
//private  its not necessary to write private before profile below-
 profile:any[];
//repos property
repos: any[];
  username:string;


//add code inside constructor
  constructor(private searchService: SearchService) {

    this.searchService.updateProfile(this.username);
    this.searchService.getProfileInfo().subscribe(profile => {
       console.log(profile);

       //phase 2 profile propety to be used search.component
       this.profile = profile;
     });

     //repos  searchServcie
     this.searchService.getProfileRepos().subscribe(repos => {
   console.log(repos);
   this.repos = repos;
 })


   }

   //below code is used for the form search
  findProfile() {
    this.searchService.updateProfile(this.username);
    this.searchService.getProfileInfo().subscribe(profile => {
       console.log(profile);

       //phase 2 profile propety to be used search.component
       this.profile = profile;
     });

     //repos  searchServcie
     this.searchService.getProfileRepos().subscribe(repos => {
   console.log(repos);
   this.repos = repos;
 })
//end of repos service
}

  ngOnInit() {
  }

}

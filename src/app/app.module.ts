import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

//import the http NgModule
import { HttpModule } from '@angular/http';

//adding the ngmodel issue
import { FormsModule } from '@angular/forms';

//import the search SearchService with the code below
import { SearchService } from './services/search.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { UsernotfoundComponent } from './usernotfound/usernotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    AboutComponent,
    UsernotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [SearchService],//copied SearchService here to make it avalable throughout the app
  bootstrap: [AppComponent]
})
export class AppModule { }

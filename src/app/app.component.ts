import {Component, OnInit} from '@angular/core';
import {BeerServiceService} from './beer/beer-service.service';
import {GiphyService} from "./giphy.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  beers = null;
  title = 'app works!';
  newVar = 'Chetan is Best';

  constructor(private beerService: BeerServiceService
  , private giphyService: GiphyService) {

  }

  ngOnInit() {
    this.getBeers();
  }

  getBeers() {
    this.beerService.getBeers().subscribe(
        beers => {
            this.beers = beers;
          for (const beer of this.beers) {
            this.giphyService.get(beer.name).subscribe(url => beer.giphyUrl = url);
          }
        }, err => {
        console.log(err);
        }
      );
  }
}

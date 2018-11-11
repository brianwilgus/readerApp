import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { LocationModel } from './location.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {

  output: string;
  error: string;

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
  }

  clear() {
    this.output = '';
    this.error = '';
  }

  showLocation() {
    this.locationService.getLocation()
      .subscribe(
        (data: LocationModel)  => {
          this.output = JSON.stringify(data, null, ' ');
        },
        error => this.error = error
      );
  }
}

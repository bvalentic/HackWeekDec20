import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Outbreak } from 'src/models/outbreak';

@Component({
  selector: 'app-outbreaks',
  templateUrl: './outbreaks.component.html',
  styleUrls: ['./outbreaks.component.scss']
})
export class OutbreaksComponent implements OnInit {
  headers: HttpHeaders = new HttpHeaders( {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });
  outbreaks: Outbreak[] = [];
  url = "http://localhost:4000/graphql";

  tableColumns = ['city', 'dayRecorded', 'numInfected'];

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.getOutbreaks();
  }

  getOutbreaks() {
    let body = JSON.stringify({query: `{
      listOutbreaks {
          city
          dayRecorded
          numInfected
      }
    }`});

    let options = {
      headers: this.headers,
    };

    this.http.post(this.url, body, options).subscribe(
      (response: any) => {
        this.outbreaks = response.data.listOutbreaks;
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetails: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.http.get(`https://api.github.com/users/${username}`)
        .subscribe((details: any) => {
          this.userDetails = details;
        });
    }
  }

}

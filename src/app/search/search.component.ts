import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery = '';
  users: any[] = [];
  private searchDelay: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  onSearchChange(query: string): void {
    if (query.length > 0) {
        this.http.get(`https://api.github.com/search/users?q=${query}`)
          .subscribe((response: any) => {
            this.users = response.items || [];
          });
    } else {
      this.users = [];
    }
  }

  showUserDetails(user: any): void {
    this.router.navigate(['/user', user.login]);
  }
}

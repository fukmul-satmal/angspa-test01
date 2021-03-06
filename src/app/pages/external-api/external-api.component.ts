import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment as env } from '../../../environments/environment';

interface Message {
  message: string;
}

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
  styleUrls: ['./external-api.component.css']
})
export class ExternalApiComponent implements OnInit {
  message: string = null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  callApi(): void {
    this.http
      .get(`${env.dev.serverUrl}/api/messages/public-message`)
      .subscribe((result: Message) => {
        this.message = result.message;
      });
  }

  callSecureApi(): void {
    // routeLinkの代わりに、'external-api'のroutingを呼び出す
    this.router.navigateByUrl('/external-api')
    .then((result) => {
        if (result) {
            // ログインしていればAPI呼び出し
            this.http
              .get(`${env.dev.serverUrl}/api/messages/protected-message`)
              .subscribe((result: Message) => {
                this.message = result.message;
            });
        }
    })
    .catch((e) => {
        console.error(e);
    });
  }
}

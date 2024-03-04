import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getData } from '@eyepax/utility';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  template: `<section>
    <router-outlet></router-outlet>
  </section>`,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ums-app';

  ngOnInit() {
    getData().then((data: any) => {
      console.log('Angular ->', data);
    });
  }
}

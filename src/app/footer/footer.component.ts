import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  endpoint = environment.baseUrl;
  dir: any;
  getData = [];

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.dir = localStorage.getItem('dir');
    this.authService.getFooter().subscribe(
      (res: any) => {
        this.getData = res.payload;
      });
  }
}

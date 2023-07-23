import { Component } from '@angular/core';

@Component({
  selector: 'app-gcc-installation',
  templateUrl: './gcc-installation.component.html',
  styleUrls: ['./gcc-installation.component.css']
})
export class GccInstallationComponent {
  constructor() { }

  ngOnInit(): void {
   sessionStorage.setItem('pageName', 'service');
  }
}

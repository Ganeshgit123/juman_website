import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name = 'Set iframe source';
  url: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14944414.958786499!2d34.401570702240775!3d23.870505280491503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2sin!4v1687955479820!5m2!1sen!2sin";
  urlSafe: SafeResourceUrl | undefined;
constructor(public sanitizer: DomSanitizer) { }

ngOnInit() {
  this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
}
}

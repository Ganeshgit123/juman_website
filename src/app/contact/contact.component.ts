import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = 'Set iframe source';
  url: string;
  urlSafe: SafeResourceUrl | undefined;

  endpoint = environment.baseUrl;
  dir: any;
  getBanners = [];
  getData = [];
  contactForm: FormGroup;
  submitted = false;
  getFooter = [];
  mapLink = [];
  bannerLength: number;

  constructor(public sanitizer: DomSanitizer, public fb: FormBuilder, public authService: AuthService) { }

  ngOnInit() {
    const object = {
      relations: ["header", "images"],
      filter: {
        header: { id: "f251c287-c78c-4a51-a8e9-9573ce28afbc" }
      },
      sort: { seq: "ASC" }
    }
    this.authService.getSectionsByHeaderId(object).subscribe(
      (res: any) => {
        this.getData = res.payload;
        this.mapLink = this.getData.filter(element => {
          return element.code === 'MAPLIN';
        })
        this.url = this.mapLink[0].erTitle;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      })


    this.dir = localStorage.getItem('dir') || "ltr";

    const bannerData = {
      relations: ["header"],
      filter: {
        header: { id: "f251c287-c78c-4a51-a8e9-9573ce28afbc" }
      },
      sort: { seq: "ASC" }
    }
    this.authService.getBanners(bannerData).subscribe(
      (res: any) => {
        this.getBanners = res.payload.filter(element => {
          return element.isActive;
        })
        this.bannerLength = this.getBanners.length;
      });
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });

    this.authService.getFooter().subscribe(
      (res: any) => {
        this.getFooter = res.payload;
      });
  }

  get f() { return this.contactForm.controls; }

  onSubmitData() {
    this.submitted = true;
    if (!(this.contactForm.valid)) {
      return false;
    }

    this.authService.createContact(this.contactForm.value)
      .subscribe((res: any) => {
        if (res.code == 200) {
          this.submitted = false;
          this.contactForm.reset();
          this.ngOnInit();
        }
      });
  }
}

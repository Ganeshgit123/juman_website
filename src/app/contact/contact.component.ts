import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment.prod';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = 'Set iframe source';
  url: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14944414.958786499!2d34.401570702240775!3d23.870505280491503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2sin!4v1687955479820!5m2!1sen!2sin";
  urlSafe: SafeResourceUrl | undefined;

  endpoint = environment.baseUrl;
  dir: any;
  getBanners = [];
  getData = [];
  contactForm: FormGroup;
  submitted = false;
  getFooter = [];

  constructor(public sanitizer: DomSanitizer, public fb: FormBuilder, public authService: AuthService, private toastr: ToastrService,) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.dir = localStorage.getItem('dir');

    const bannerData = {
      relations: ["header"],
      filter: {
        header: { id: "f251c287-c78c-4a51-a8e9-9573ce28afbc" }
      },
      sort: { seq: "ASC" }
    }
    this.authService.getBanners(bannerData).subscribe(
      (res: any) => {
        this.getBanners = res.payload;
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
          this.toastr.success('Success ', 'Updated Successfully');
          this.contactForm.reset();
          this.ngOnInit();
        } else {
          this.toastr.error('Error ', 'Error');
        }
      });
  }
}

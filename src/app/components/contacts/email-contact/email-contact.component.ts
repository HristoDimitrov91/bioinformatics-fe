import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inquiry } from '../resources/Inquiry';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-email-contact',
  templateUrl: './email-contact.component.html',
  styleUrls: ['./email-contact.component.css', "../../../../../node_modules/bulma/css/bulma.css"]
})
export class EmailContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;
  inquiry: Inquiry;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  processForm() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const createInquiryUrl = "/contacts/inquiry";
    this.inquiry = {
      name: this.name,
      email: this.email,
      message: this.message
    };
    this.http.post<Inquiry>(environment.contactsUrl + createInquiryUrl, this.inquiry, httpOptions).subscribe();
    this.clearForm();
  }

  clearForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

}

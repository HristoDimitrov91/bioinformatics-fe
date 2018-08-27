import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-contact',
  templateUrl: './email-contact.component.html',
  styleUrls: ['./email-contact.component.css', "../../../../../node_modules/bulma/css/bulma.css"]
})
export class EmailContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;
  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 
  }

}

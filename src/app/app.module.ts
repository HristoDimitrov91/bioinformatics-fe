import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BioBodyComponent } from './bio-body/bio-body.component';
import { HeaderComponent } from './components/header/header.component';
import { ParallaxDirective } from './parallax.directive';
import { RosalindComponent } from './bio-body/rosalind/rosalind.component';
import { ContactsComponent } from './bio-body/contacts/contacts.component';
import { EmailContactComponent } from './email-contact/email-contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BioBodyComponent,
    HeaderComponent,
    ParallaxDirective,
    RosalindComponent,
    ContactsComponent,
    EmailContactComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

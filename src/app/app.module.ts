import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BioBodyComponent } from './bio-body/bio-body.component';
import { ParallaxDirective } from './parallax.directive';
import { FormsModule } from '@angular/forms';
import { IntroComponent } from './components/intro/intro.component';
import { HeaderComponent } from 'src/app/bio-header/header.component';
import { RosalindComponent } from 'src/app/components/rosalind/rosalind.component';
import { ContactsComponent } from 'src/app/components/contacts/contacts.component';
import { EmailContactComponent } from 'src/app/components/contacts/email-contact/email-contact.component';
import { AuthorInfoComponent } from './components/contacts/author-info/author-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BioBodyComponent,
    HeaderComponent,
    ParallaxDirective,
    RosalindComponent,
    ContactsComponent,
    EmailContactComponent,
    IntroComponent,
    AuthorInfoComponent
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule } from '@angular/material';
import { BioBodyComponent } from './bio-body/bio-body.component';
import { ParallaxDirective } from './parallax.directive';
import { FormsModule } from '@angular/forms';
import { IntroComponent } from './components/intro/intro.component';
import { HeaderComponent } from 'src/app/bio-header/header.component';
import { RosalindComponent } from 'src/app/components/rosalind/rosalind.component';
import { ContactsComponent } from 'src/app/components/contacts/contacts.component';
import { EmailContactComponent } from 'src/app/components/contacts/email-contact/email-contact.component';
import { AuthorInfoComponent } from './components/contacts/author-info/author-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TwitterTweetComponent } from './components/contacts/twitter-tweet/twitter-tweet.component';
import { TwitterFollowComponent } from './components/contacts/twitter-follow/twitter-follow.component';
import { RoutingModule } from './routing/routing.module';
import { LayoutComponent } from './layout/layout.component';

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
    AuthorInfoComponent,
    TwitterTweetComponent,
    TwitterFollowComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

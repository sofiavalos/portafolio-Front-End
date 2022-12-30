import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoIconComponent } from './components/logo-icon/logo-icon.component';
import { LinkedinIconComponent } from './components/linkedin-icon/linkedin-icon.component';
import { ButtonComponent } from './components/button/button.component';
import { DiscordIconComponent } from './components/discord-icon/discord-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoIconComponent,
    LinkedinIconComponent,
    ButtonComponent,
    DiscordIconComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

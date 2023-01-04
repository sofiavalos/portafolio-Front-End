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
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProfilePicComponent } from './components/profile-pic/profile-pic.component';
import { NameAboutMeComponent } from './components/name-about-me/name-about-me.component';
import { ProfessionComponent } from './components/profession/profession.component';
import { InformationComponent } from './components/information/information.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoIconComponent,
    LinkedinIconComponent,
    ButtonComponent,
    DiscordIconComponent,
    BannerComponent,
    AboutMeComponent,
    ProfilePicComponent,
    NameAboutMeComponent,
    ProfessionComponent,
    InformationComponent,
    SkillsComponent,
    SkillItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

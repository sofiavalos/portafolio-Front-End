import { Component } from '@angular/core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-discord-icon',
  templateUrl: './discord-icon.component.html',
  styleUrls: ['./discord-icon.component.css']
})
export class DiscordIconComponent {
  faDiscord = faDiscord;

}

import { Component } from '@angular/core';
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-linkedin-icon',
  templateUrl: './linkedin-icon.component.html',
  styleUrls: ['./linkedin-icon.component.css']
})
export class LinkedinIconComponent {
  faLinkedinIn = faLinkedinIn;
}

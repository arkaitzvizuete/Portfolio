import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}

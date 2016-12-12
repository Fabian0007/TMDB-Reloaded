import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movietrailer',
  templateUrl: './movietrailer.component.html',
  styleUrls: ['./movietrailer.component.css'],
})
export class MovietrailerComponent implements OnInit {
  @Input() key: string;
  active:boolean=true;
  url: SafeResourceUrl;
  sanitizer:any;
  constructor(sanitizer: DomSanitizer) {
    this.sanitizer=sanitizer;
  }

  ngOnInit() {
  }
  
  getUrlVideo(): string {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}/?rel=0&`);
  }
  
  changeState() {
    this.active=!this.active;
  }

}

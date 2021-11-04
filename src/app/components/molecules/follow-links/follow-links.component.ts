import { Component, OnInit } from '@angular/core';
import { ILinks } from 'src/app/models/ILinks';

@Component({
  selector: 'app-follow-links',
  templateUrl: './follow-links.component.html',
  styleUrls: ['./follow-links.component.scss'],
})
export class FollowLinksComponent implements OnInit {
  array: ILinks[];

  constructor() {
    this.array = [
      {
        linkHref: 'facebook/filmsfree',
        linkText: 'facebook',
        linkIcon: 'fab fa-facebook-square',
      },
      {
        linkHref: 'instagram/filmsfree',
        linkText: 'instagram',
        linkIcon: 'fab fa-instagram',
      },
    ];
  }

  ngOnInit(): void {}
}

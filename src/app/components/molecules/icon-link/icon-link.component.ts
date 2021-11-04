import { Component, Input, OnInit } from '@angular/core';
import { ILinks } from 'src/app/models/ILinks';

@Component({
  selector: 'app-icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.scss'],
})
export class IconLinkComponent implements OnInit {
  @Input()
  linkInfo!: ILinks;

  constructor() {}

  ngOnInit(): void {}
}

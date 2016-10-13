import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-<%= argsInKebab %>-tab',
  templateUrl: './<%= argsInKebab %>-tab.component.html',
  styleUrls: ['./<%= argsInKebab %>-tab.component.scss']
})
export class <%= tabName %>TabComponent implements OnInit {

  constructor() {
  }

  ngOnInit(){}
}

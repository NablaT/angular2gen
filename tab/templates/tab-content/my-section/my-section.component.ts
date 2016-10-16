import { Component, OnInit } from '@angular/core';
import {DataChartService} from "../../../shared/services/data-chart-service.service";
import {FiltersService} from "../../../shared/services/filters-service.service";

@Component({
  selector: 'app-<%= argsInKebab %>-section',
  templateUrl: './<%= argsInKebab %>-section.component.html',
  styleUrls: ['./<%= argsInKebab %>-section.component.scss']
})
export class <%= tabName %>SectionComponent implements OnInit {

  private title:string;

  private options:HighchartsOptions;
  private filters:number[];
  private currentFilter:number;
  private currentData:[number[]];

  constructor(private chartDataService:DataChartService,
              private filtersService:FiltersService) {

    this.title="Section <%= tabName %>";
    this.chartDataService.getData().then(
      data=> {
        this.currentData = data;
        this.setOptions();
      }
    );
    this.filters = [];
    this.currentFilter = 0;

    filtersService.filtersObservable.subscribe(
      filter => {
        //TODO:To remove
        this.currentFilter = filter;
        this.filters.push(filter);
        this.setOptions();
      }
    );
  }

  ngOnInit() {
  }


  setOptions() {
    this.options = {
      title: {text: 'PTR'},
      series: [{
        data: this.currentData[this.currentFilter],
      }],

    };
  }
}

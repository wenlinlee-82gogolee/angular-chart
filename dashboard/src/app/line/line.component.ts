import { Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  @Output() lineChange = new EventEmitter<boolean>()
  title = 'Line Chart'
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [0, 0, 5, 10, 50, 100, 100],
        label: 'Energy Level',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: '#EBB02D',
        hoverBorderColor: 'red'
      }
    ],


  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: false,

  };
  lineChartLegend = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}

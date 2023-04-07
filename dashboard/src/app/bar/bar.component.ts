import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {
  title = 'Bar Chart'
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'A', borderRadius: 3 },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'B', borderRadius: 3 }
    ]
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
}

import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent {
  title = 'Pie Chart';
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  pieChartLabels = ['one', 'two', 'three'];
  pieChartDatasets = [{
    data: [300, 500, 100]
  }];
  pieChartLegend = true;
  pieChartPlugins = [];
}

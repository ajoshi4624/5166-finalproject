// src/app/pages/reports/reports.ts
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartService } from '../../services/chart';

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.html',
  styleUrls: ['./reports.css']
})
export class ReportsComponent implements AfterViewInit {
  @ViewChild('reportsChart') reportsChartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart?: Chart;

  constructor(private chartService: ChartService) {}

  ngAfterViewInit(): void {
    this.chartService.getReportsChart().subscribe((data) => {
      const config = {
        type: 'line' as const,
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Preventable cases per year',
              data: data.values,
              borderColor: '#00a6e0',
              backgroundColor: 'rgba(0, 166, 224, 0.15)',
              tension: 0.3,
              fill: true
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      };

      const ctx = this.reportsChartCanvas.nativeElement.getContext('2d');
      if (ctx) {
        this.chart = new Chart(ctx, config);
      }
    });
  }
}

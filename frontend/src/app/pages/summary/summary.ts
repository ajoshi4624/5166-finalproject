
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartService } from '../../services/chart';

@Component({
  selector: 'app-summary',
  standalone: true,
  templateUrl: './summary.html',
  styleUrls: ['./summary.css']
})
export class SummaryComponent implements AfterViewInit {
  @ViewChild('summaryChart') summaryChartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart?: Chart;

  constructor(private chartService: ChartService) {}

  ngAfterViewInit(): void {
    this.chartService.getSummaryChart().subscribe((data) => {
      const config = {
        type: 'bar' as const,
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Number of scans',
              data: data.values,
              backgroundColor: 'rgba(0, 166, 224, 0.3)',
              borderColor: '#00a6e0',
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      };

      const ctx = this.summaryChartCanvas.nativeElement.getContext('2d');
      if (ctx) {
        this.chart = new Chart(ctx, config);
      }
    });
  }
}

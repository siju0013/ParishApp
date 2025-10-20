import { Component } from '@angular/core';
import { Tables } from '../../../Shared/tables/tables';

@Component({
  selector: 'app-activities',
  imports: [Tables],
  templateUrl: './activities.html',
  styleUrl: './activities.scss'
})
export class Activities {
  activitiesColumns = [
    { key: 'id', title: 'ID' },
    { key: 'filename', title: 'FileName' },
    { key: 'title', title: 'Title' },
    { key: 'description', title: 'Description' },
    { key: 'date', title: 'ActivityDate' }
  ];
  activitiesData = this.generateData(0, 20);
  loading = false;
  page = 1;

  generateData(start: number, count: number) {
    return Array.from({ length: count }).map((_, i) => ({
      id: start + i + 1,
      filename: '',
      title: '',
      description: '',
      date: ''
    }));
  }

  loadMore() {
    this.loading = true;
    setTimeout(() => {
      this.activitiesData = [...this.activitiesData, ...this.generateData(this.page * 20, 20)];
      this.page++;
      this.loading = false;
    }, 800);
  }
}

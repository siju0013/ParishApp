import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, InfiniteScrollModule],
  templateUrl: './tables.html',
  styleUrl: './tables.scss'
})
export class Tables {
  @Input() columns: { key: string; title: string }[] = [];

  /** Data rows */
  @Input() data: any[] = [];

  /** Optional title */
  @Input() title?: string;

  /** If true, show loader when fetching next set */
  @Input() loading = false;

  /** Emit event when scrolled near bottom */
  @Output() loadMore = new EventEmitter<void>();

  onScrollDown(): void {
    if (!this.loading) {
      this.loadMore.emit();
    }
  }
}

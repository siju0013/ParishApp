import { Component } from '@angular/core';
import { Tables } from '../../../Shared/tables/tables';
import { ParishMembersForm } from './parish-members-form/parish-members-form';

@Component({
  selector: 'app-parish-members',
  imports: [Tables, ParishMembersForm],
  templateUrl: './parish-members.html',
  styleUrl: './parish-members.scss'
})
export class ParishMembers {
  IsNewFormVisible = false;
  memberColumns = [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Name' },
    { key: 'housename', title: 'HouseName' },
    { key: 'Unit', title: 'Unit' },
    { key: 'dob', title: 'DateOfBirth' },
    { key: 'occupation', title: 'Occupation' }
  ];
  membersData = this.generateData(0, 20);
  loading = false;
  page = 1;

  generateData(start: number, count: number) {
    return Array.from({ length: count }).map((_, i) => ({
      id: start + i + 1,
      name: '',
      housename: '',
      Unit: '',
      dob: '',
      occupation:''
    }));
  }

  loadMore() {
    this.loading = true;
    setTimeout(() => {
      this.membersData = [...this.membersData, ...this.generateData(this.page * 20, 20)];
      this.page++;
      this.loading = false;
    }, 800);
  }
  addMembers() {
    this.IsNewFormVisible = true;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  parishMembersCount = 3754;
  familyCount = 945;
  birthCertCount = 300;
  marriageCertCount = 150;
  deathCertCount = 10;
  sundaySchoolCount= 467;
  nonParticipantCount = 56;
  orgParticipantCount = 67;
}

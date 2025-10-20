import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BirthCertificate } from '../birth-certificate/birth-certificate';
import { MarriageCertificate } from '../marriage-certificate/marriage-certificate';
import { ParishMembers } from '../parish-members/parish-members';
import { DeathCertificate } from '../death-certificate/death-certificate';
@Component({
  selector: 'app-portal-layout',
  imports: [CommonModule, RouterOutlet, BirthCertificate, MarriageCertificate, ParishMembers, DeathCertificate],
  templateUrl: './portal-layout.html',
  styleUrl: './portal-layout.scss'
})
export class PortalLayout {

}

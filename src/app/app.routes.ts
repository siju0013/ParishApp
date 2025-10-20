import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./Components/dashboard/dashboard').then(m => m.Dashboard), data: { breadcrumb: '' } },
  { path: 'dashboard', loadComponent: () => import('./Components/dashboard/dashboard').then(m => m.Dashboard), data: { breadcrumb: '' } },
  {
    path: 'portal',
    loadComponent: () => import('./Components/Portal/portal-layout/portal-layout').then(m => m.PortalLayout),
    children: [
      { path: '', loadComponent: () => import('./Components/Portal/parish-members/parish-members').then(m=>m.ParishMembers), data: { breadcrumb: 'Parish Members' } },
      { path: 'members', loadComponent: () => import('./Components/Portal/parish-members/parish-members').then(m => m.ParishMembers), data: { breadcrumb: 'Parish Members' } },
      { path: 'birth-certificate', loadComponent: () => import('./Components/Portal/birth-certificate/birth-certificate').then(m => m.BirthCertificate), data: { breadcrumb: 'Birth Certificate' } },
      { path: 'death-certificate', loadComponent: () => import('./Components/Portal/death-certificate/death-certificate').then(m => m.DeathCertificate), data: { breadcrumb: 'Death Certificate' } },
      { path: 'marriage-certificate', loadComponent: () => import('./Components/Portal/marriage-certificate/marriage-certificate').then(m => m.MarriageCertificate), data: { breadcrumb: 'Marriage Certificate' } }
    ],
    data: { breadcrumb: 'Portal' }
  },
  {
    path: 'web', loadComponent: () => import('./Components/Web/weblayout/weblayout').then(m => m.Weblayout), 
    children: [
      { path: '', loadComponent: () => import('./Components/Web/activities/activities').then(m => m.Activities), data: { breadcrumb: 'Parish Activities' }, },
      {
        path: 'activities', loadComponent: () => import('./Components/Web/activities/activities').then(m => m.Activities), data: { breadcrumb: 'Parish Activities' },
        children: [
          { path: 'New', loadComponent: () => import('./Components/Web/activities/activities-form/activities-form').then(m => m.ActivitiesForm), data: { breadcrumb: 'New Activities' }, },
          { path: 'Modify', loadComponent: () => import('./Components/Web/activities/activities-form/activities-form').then(m => m.ActivitiesForm), data: { breadcrumb: 'Modify Activities' }, },
]
      },
      
    ],
    data: { breadcrumb: 'Web' }
  }
];

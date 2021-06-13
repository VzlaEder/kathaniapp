/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { Authenticated } from '../../guards/Authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [Authenticated],
    children: [
      {
        path: 'start',
        loadChildren: () => import('../start/start.module').then(m => m.StartPageModule)
      },
      {
        path: 'glucose-control',
        loadChildren: () => import('../glucose-control/glucose-control.module').then(m => m.GlucoseControlPageModule)
      },
      {
        path: 'weith-control',
        loadChildren: () => import('../weight-control/weight-control.module').then(m => m.WeightControlPageModule)
      },
      {
        path: 'treatment-control',
        loadChildren: () => import('../treatment-control/treatment-control.module').then(m => m.TreatmentControlPageModule)
      },
      {
        path: 'statistics',
        loadChildren: () => import('../statistics/statistics.module').then(m => m.StatisticsPageModule)
      },
      {
        path: 'glucose-history',
        loadChildren: () => import('../glucose-history/glucose-history.module').then(m => m.GlucoseHistoryPageModule)
      },
      {
        path: 'glucose-log',
        loadChildren: () => import('../glucose-log/glucose-log.module').then(m => m.GlucoseLogPageModule)
      },
      {
        path: 'weight-history',
        loadChildren: () => import('../weight-history/weight-history.module').then(m => m.WeightHistoryPageModule)
      },
      {
        path: 'weight-log',
        loadChildren: () => import('../weight-log/weight-log.module').then(m => m.WeightLogPageModule)
      },
      {
        path: 'tnon-pharmacological-history',
        loadChildren: () => import('../tnon-pharmacological-history/tnon-pharmacological-history.module').then(m => m.TNonPharmacologicalHistoryPageModule)
      },
      {
        path: 'tpharmacological-history',
        loadChildren: () => import('../tpharmacological-history/tpharmacological-history.module').then(m => m.TPharmacologicalHistoryPageModule)
      },
      {
        path: 'tnon-pharmacological-monitoring',
        loadChildren: () => import('../tnon-pharmacological-monitoring/tnon-pharmacological-monitoring.module').then(m => m.TNonPharmacologicalMonitoringPageModule)
      },
      {
        path: 'tpharmacological-monitoring',
        loadChildren: () => import('../tpharmacological-monitoring/tpharmacological-monitoring.module').then(m => m.TPharmacologicalMonitoringPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'qualify',
        loadChildren: () => import('../qualify/qualify.module').then(m => m.QualifyPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: '',
        redirectTo: '/home/start',
        pathMatch: 'Full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }

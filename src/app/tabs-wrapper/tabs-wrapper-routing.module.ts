import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsWrapperPage } from './tabs-wrapper.page';

const routes: Routes = [
  {
    path: '',
    component: TabsWrapperPage,
    children: [
      {
        path: 'first',
        loadChildren: '../tabs/tabs.module#TabsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsWrapperPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsWrapperPageRoutingModule } from './tabs-wrapper-routing.module';

import { TabsWrapperPage } from './tabs-wrapper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsWrapperPageRoutingModule
  ],
  declarations: [TabsWrapperPage]
})
export class TabsWrapperPageModule {}

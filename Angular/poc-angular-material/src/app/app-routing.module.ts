import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { OrderSummaryComponent }   from './module/ordersummary/ordersummary.component';

import { CustomerInquieryComponent }   from './module/customerinquiery/customerinquiery.component';

export const routes: Routes = [
	{
    path: '',
    component: HomeComponent
	},
	 {
        path: 'ordersummary',
        component: OrderSummaryComponent
    },
    {
      path: 'customerinquiery',
      component: CustomerInquieryComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

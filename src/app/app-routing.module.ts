import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './dog-owner-create/address/address.component';
import { DogCardsComponent } from './owner-dashboard/dog-cards/dog-cards.component';
import { OwnerSidebarComponent } from './owner-dashboard/owner-sidebar/owner-sidebar.component';
import { OwnerDashboardComponent} from './owner-dashboard/owner-dashboard.component'
import { DogProfileComponent } from './dog-owner-create/dog-profile/dog-profile.component';
import { DogTableComponent } from './dog-owner-create/dog-table/dog-table.component';


const routes: Routes = [
  { path: '', component: AddressComponent},
  { path: 'tracy', component: OwnerDashboardComponent},
  { path: 'alice', component: DogProfileComponent},
  { path: 'alice2', component: DogTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

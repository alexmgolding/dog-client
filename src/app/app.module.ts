import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AddressComponent } from "./dog-owner-create/address/address.component";
import { DogTableComponent } from "./dog-owner-create/dog-table/dog-table.component";
import { DogProfileComponent } from "./dog-owner-create/dog-profile/dog-profile.component";
import { DogCardsComponent } from "./owner-dashboard/dog-cards/dog-cards.component";
import { RecentRequestsComponent } from "./owner-dashboard/recent-requests/recent-requests.component";
import {
  RequestWalkComponent,
  DialogRequest
} from "./owner-dashboard/request-walk/request-walk.component";
import { OwnerSidebarComponent } from "./owner-dashboard/owner-sidebar/owner-sidebar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { OwnerDashboardComponent } from "./owner-dashboard/owner-dashboard.component";
import { AvailableWalkersComponent } from "./owner-dashboard/available-walkers/available-walkers.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";

import { DogOwnerService } from "./dog-owner-create/dog-owner.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { OwnerProfileComponent } from "./owner-dashboard/owner-profile/owner-profile.component";
import { LisuTabsComponent } from "./auth/lisu-tabs/lisu-tabs.component";
import { WalkerCardsComponent } from "./walker-cards/walker-cards.component";
import { ReviewWalkerComponent } from "./review-walker/review-walker.component";
import { WalkerCreateComponent } from "./walker-create/walker-create.component";
import { WlkrOwnrviewComponent } from "./dog-owner-create/wlkr-ownrview/wlkr-ownrview.component";
import { WalkerSidebarComponent } from "./walker-sidebar/walker-sidebar.component";
import { OwnrWalkerviewComponent } from "./ownr-walkerview/ownr-walkerview.component";
import { WalkerDashboardComponent } from "./walker-dashboard/walker-dashboard.component";
import { WalkerNewRequestsComponent } from "./walker-new-requests/walker-new-requests.component";
import { WalkerBioComponent } from "./walker-bio/walker-bio.component";
import { WalkerProfileComponent } from "./walker-profile/walker-profile.component";
import { DashboardComponent } from "./containers/dashboard/dashboard.component";
import { UserProfileComponent } from "./containers/user-profile/user-profile.component";
import { WalkerRecentRequestComponent } from "./walker-dashboard/walker-recent-request/walker-recent-request.component";
import { AgmCoreModule } from "@agm/core";
import { MAPAPIKEY } from "src/environments/environment.prod";

import { OwnerWalkerviewSidebarComponent } from "./ownr-walkerview/owner-walkerview-sidebar/owner-walkerview-sidebar.component";
import { OwnerWalkerviewDogCardsComponent } from "./ownr-walkerview/owner-walkerview-dog-cards/owner-walkerview-dog-cards.component";
import { WalkerOwnerSidebarComponent } from "./dog-owner-create/wlkr-ownrview/walker-owner-sidebar/walker-owner-sidebar.component";
import { WalkerOwnerReviewCardsComponent } from "./dog-owner-create/wlkr-ownrview/walker-owner-review-cards/walker-owner-review-cards.component";

import { AuthGuardService } from "./auth-guard.service";
import { JwtModule } from "@auth0/angular-jwt";
import { AppPasswordDirective } from "./app-password.directive";
const APIURL = "http://localhost:4200";
export function tokenGetter() {
  return localStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddressComponent,
    DogTableComponent,
    DogProfileComponent,
    DogCardsComponent,
    RecentRequestsComponent,
    RequestWalkComponent,
    OwnerSidebarComponent,
    OwnerDashboardComponent,
    OwnerProfileComponent,
    AvailableWalkersComponent,
    SignupComponent,
    LoginComponent,
    LisuTabsComponent,
    WalkerCardsComponent,
    ReviewWalkerComponent,
    WalkerCreateComponent,
    WalkerBioComponent,
    WlkrOwnrviewComponent,
    WalkerSidebarComponent,
    OwnrWalkerviewComponent,
    WalkerDashboardComponent,
    WalkerNewRequestsComponent,
    WalkerProfileComponent,
    DashboardComponent,
    UserProfileComponent,
    WalkerRecentRequestComponent,
    DialogRequest,
    OwnerWalkerviewSidebarComponent,
    OwnerWalkerviewDogCardsComponent,
    WalkerOwnerSidebarComponent,
    WalkerOwnerReviewCardsComponent,
    AppPasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: MAPAPIKEY
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [APIURL]
      }
    })
  ],
  providers: [DogOwnerService, AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents: [DialogRequest]
})
export class AppModule {}

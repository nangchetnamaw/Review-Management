import { HeaderComponent } from './header/header.component';
import { ReviewTableComponent } from './review-table/review-table.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { from } from 'rxjs';
import { CreateReviewComponent } from './create-review/create-review.component';
import { ReviewNavbarComponent } from './review-navbar/review-navbar.component';
import { SelfReviewComponent } from './self-review/self-review.component';
import { ReviewerReviewComponent } from './reviewer-review/reviewer-review.component';
import { ReviewerQaerComponent } from './reviewer-qaer/reviewer-qaer.component';
import { AdminOptionsComponent } from './admin-options/admin-options.component';
import { AddUpdateUserComponent } from './add-update-user/add-update-user.component';
import { AddUserComponent} from './add-user/add-user.component'
import { AdminCrudComponent } from './admin-crud/admin-crud.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdatePersonalInfoComponent} from './update-personal-info/update-personal-info.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "employees", component:AdminCrudComponent},
  {path: "user", component: HeaderComponent, children: [
    {path: "", redirectTo: "profile", pathMatch:"full"},
    {path: "profile", component: AddUpdateUserComponent},
    {path: "reviews", component: ReviewNavbarComponent, children: [
      {path: "", redirectTo: "allReviews", pathMatch: "full"},
      {path: "allReviews", component: ReviewTableComponent},
      {path: "pendingByReviewer", component:  ReviewTableComponent},
      {path: "pendingByQAer", component: ReviewTableComponent},
      {path: "closed", component: ReviewTableComponent}
    ]}
  ]},

  {path: "admin", component: AdminMainComponent, children: [
    {path: "", redirectTo: "home", pathMatch: 'full'},
    {path: "home", component: AdminOptionsComponent},
    {path: "profile", component: AddUpdateUserComponent},
    {path: "review", component: CreateReviewComponent},
    {path: "employees", component: AdminCrudComponent},
    {path: "newEmployee", component: AddUserComponent},
    {path: "updateEmployee", component: AddUpdateUserComponent}
  ]
  },
  {path: "addUser", component: AddUserComponent},
  {path: "reviewerqaer", component: ReviewerQaerComponent},
  {
    path: "nav", component: ReviewNavbarComponent, children: [
      {
        path: "", redirectTo: 'allReviews', pathMatch: 'full'
      },
      {
        path: "allReviews", component: ReviewTableComponent
      },
      {
        path: "pendingByReviewer", component: ReviewTableComponent
      },
      {
        path: "pendingByQAer", component: ReviewTableComponent
      },
      {
        path: "closed", component: ReviewTableComponent
      }
    ]
  },
  {path: "review", component: ReviewerReviewComponent},
  {path: "createReview", component: CreateReviewComponent},
  {path: "adminHeader", component: AdminHeaderComponent},
  {path: "selfReview", component:SelfReviewComponent},
  {path: "personal-info", component:UpdatePersonalInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents=[AdminCrudComponent]

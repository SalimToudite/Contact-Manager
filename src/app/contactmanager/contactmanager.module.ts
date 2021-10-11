import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { MaterialModule } from './../shared/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {RouterModule, Routes} from "@angular/router";
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import { NotesComponent } from './component/notes/notes.component';
import { NewContactDialogComponent } from './component/new-contact-dialog/new-contact-dialog.component';

const routes : Routes = [
  {path: '', component: ContactmanagerAppComponent,
  children: [
    { path: ':id', component: MainContentComponent},
    { path: '', component: MainContentComponent}
  ]},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NotesComponent,
    NewContactDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),

  ],
  providers: [
    UserService
  ]
})
export class ContactmanagerModule { }

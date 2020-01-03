import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { HomePage } from './home.page';

const routes: Routes =[
  {
    path:'',
    children:[{
      path:'',
      component: HomePage
    },
  {
    path:'numberss',
    loadChildren:'../numberss.module#NumberssPageModule'
  }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes) 
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

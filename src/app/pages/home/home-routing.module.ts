import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'homeTab',
    component: HomePage,
    children: [
      {
        path: 'aboutUs',
        loadChildren: () => import('../about-us/about-us.module').then(m => m.AboutUsPageModule)
      },
      {
        path: 'incidencias',
        loadChildren: () => import('../incidencias/incidencias.module').then(m => m.IncidenciasPageModule)
      },
      {
        path: 'details/:id',
        loadChildren: () => import('../details/details.module').then(m => m.DetailsPageModule)

      }
    ]

  },  
  {
    path: '',
    redirectTo: '/home/homeTab/aboutUs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

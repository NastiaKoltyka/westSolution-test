import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('..//../home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('..//../login/login.module').then(m => m.LoginModule) },
  { path: 'news', loadChildren: () => import('..//../news/news.module').then(m => m.NewsModule), canActivate: [AuthGuard] },
  { path: 'profile', loadChildren: () => import('..//../profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

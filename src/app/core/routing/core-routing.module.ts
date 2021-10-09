import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from 'src/app/auth.guard';
// import { UserResolverService } from 'src/app/user-resolver.service';



const routes: Routes = [
  { path: 'login', loadChildren: () => import('..//../login/login.module').then(m => m.LoginModule) },
  { path: 'news', loadChildren: () => import('..//../news/news.module').then(m => m.NewsModule) },
  { path: 'profile', loadChildren: () => import('..//../profile/profile.module').then(m => m.ProfileModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { PostDetail } from './components/pages/post-detail/post-detail';
import { About } from './components/pages/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'post/:id', component: PostDetail },
  { path: 'about', component: About },
  { path: '**', redirectTo: '' }
];

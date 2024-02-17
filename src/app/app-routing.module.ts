import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './features/blogs/blogs.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AddBlogsComponent } from './features/add-blogs/add-blogs.component';
import { UpdateComponent } from './features/update/update.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
  },
  {
    path: 'addBlog',
    component: AddBlogsComponent,
  },
  {
    path: 'editBlog/:blogId',
    component: UpdateComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { PostEditComponent } from "./posts/post-edit/post-edit.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PostItemComponent } from "./posts/post-list/post-item/post-item.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostsComponent } from "./posts/posts.component";
import { PostDetailComponent } from "./posts/post-detail/post-detail.component";

const routes: Routes = [
  { path: "",redirectTo:"/posts", pathMatch:"full"},
  {
    path: "posts",
    component: PostsComponent,
    children: [
      { path: "new", component: PostEditComponent },
      {
        path: ":id",
        component: PostDetailComponent,
      },
      {
        path: ":id/edit",
        component: PostEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TaglineComponent } from "./tagline/tagline.component";
import { PostsComponent } from "./posts/posts.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostItemComponent } from "./posts/post-list/post-item/post-item.component";
import { PostEditComponent } from "./posts/post-edit/post-edit.component";
import { PostService } from "./posts/post.service";
import { PostDetailComponent } from "./posts/post-detail/post-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaglineComponent,
    PostsComponent,
    PostListComponent,
    PostItemComponent,
    PostEditComponent,
    PostDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}

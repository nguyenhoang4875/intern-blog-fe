import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"],
})
export class PostDetailComponent implements OnInit {
  post: Post;
  id: number;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.post = this.postService.getPost(this.id);
    });
  }

  onEditPost() {
    this.router.navigate(["edit"], { relativeTo: this.route });
    // this.router.navigate(['../',this.id, 'edit'],{relativeTo: this.route});
  }
  onDeletePost() {
    this.postService.deletePost(this.id);
    this.router.navigate(["/posts"]);
  }
}

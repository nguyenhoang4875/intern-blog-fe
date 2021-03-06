import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from "../post.model";
import { PostService } from "../post.service";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[];
  subscription: Subscription;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.postService.postsChange.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.posts = this.postService.getPosts();
  }

  onNewPost() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

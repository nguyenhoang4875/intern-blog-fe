import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [
    new Post(
      "‘My World Is Shattering’: Foreign Students Stranded by Coronavirus",
      "When the pandemic shuttered colleges, many international students had no idea where to live or whether they would ever be able to return to class.",
      new Date(),
      "https://static01.nyt.com/images/2020/04/23/us/00virus-foreignstudents/merlin_170115345_e3876a32-049e-453b-a9ae-6577f5a0f234-jumbo.jpg?quality=90&auto=webp"
    ),
    new Post(
      "Coronavirus Antibody Tests: Can You Trust the Results?",
      "A team of scientists worked around the clock to evaluate 14 antibody tests. A few worked as advertised. Most did not",
      new Date(),
      "https://static01.nyt.com/images/2020/04/23/science/23VIRUS-ANTIBODY1/merlin_171837048_95906004-c69a-405b-ba30-879a47a32234-superJumbo.jpg?quality=90&auto=webp"
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}

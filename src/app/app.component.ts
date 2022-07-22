import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import AppState from './models/app-state.model';
import Post from './models/post.model';
import { GetPostsAction } from './store/posts.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-angular-demo';
  posts$: Observable<Post[]>;
  posts: Post[];
  constructor(private store: Store<AppState>) {
    this.posts$ = this.store.select(store => store.post.posts);
    this.posts$.subscribe(posts => {
      this.posts = posts;
    });
  }
  ngOnInit(): void {
    this.store.dispatch(GetPostsAction());
  }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as PostActionType from './posts.actions';
import { PostsService } from '../services/posts.service';

@Injectable()
export class PostEffect {
  
  getPosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostActionType.GetPostsAction),
    mergeMap(() => this.service.getPost().pipe(
      map(posts => PostActionType.GetPostsSucsessAction({posts})),
      catchError(error => of(PostActionType.GetPostsFailAction(error.message)))
    ),
    )));

  constructor(
    private actions$: Actions,
    private service: PostsService
  ) { }
}
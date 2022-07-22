import { createReducer, on } from '@ngrx/store';
import Post from '../models/post.model';
import * as PostActions from './posts.actions';

export default interface PostState {
    posts: Post[];
    loading: boolean;
    error: string | any;
}

const initialState: PostState = {
    posts: [],
    loading: false,
    error: ""

}

export const PostsReducer = createReducer(
    initialState,
    on(PostActions.GetPostsAction, state => ({ ...state, loading: true })),
    on(PostActions.GetPostsSucsessAction, (state, action) => ({ ...state, loading: false, posts: action.posts,error:false })),
    on(PostActions.GetPostsFailAction, (state, action) => ({ ...state, loading: false, error: action.error })),
);
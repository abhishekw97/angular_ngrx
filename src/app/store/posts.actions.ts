import { createAction, props } from "@ngrx/store";
import Post from "src/app/models/post.model";

export enum PostActionTypes {
    // ADD_POST="[POST] Add Post",
    // ADD_POST_SUCCESS="[POST] Add Post Sucsess",
    // ADD_POST_FAIL="[POST] Add Post Fail",

    GET_POSTS = "[POST] Get Posts",
    GET_POSTS_SUCCESS = "[POST] Get Posts Success",
    GET_POSTS_FAIL = "[POST] Get Posts Fail",

    // DELETE_POSTS="[POST] Get Posts",
    // DELETE_POSTS_SUCCESS="[POST] Get Posts Success",
    // DELETE_POSTS_FAIL="[POST] Get Posts Fail",
}

export const GetPostsAction = createAction(
    PostActionTypes.GET_POSTS
);
export const GetPostsSucsessAction = createAction(
    PostActionTypes.GET_POSTS_SUCCESS,
    props<{ posts: Post[] }>()
);
export const GetPostsFailAction = createAction(
    PostActionTypes.GET_POSTS_FAIL,
    props<{ error: any }>()
);


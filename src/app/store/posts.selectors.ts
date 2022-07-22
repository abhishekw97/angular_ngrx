import { createSelector } from "@ngrx/store";
import PostState from "./posts.reducer";


export const selectFeatrue = (state: PostState) => state;

export const isloadingSealector = createSelector(
    selectFeatrue,(state)=>state.loading
);
export const postsSealector = createSelector(
    selectFeatrue,(state)=>state.posts
);
export const errorSealector = createSelector(
    selectFeatrue,(state)=>state.error
);
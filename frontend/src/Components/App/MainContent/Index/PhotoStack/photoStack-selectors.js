import {createSelector} from "reselect"

export const getPhotos = (state) => state.photoStackReducer.photos

const getGonePhotos = (state) => state.photoStackReducer.gonePhotos

export const getRemainingPhotos = createSelector(getPhotos, getGonePhotos,
    (photos, gonePhotos) => {
        return photos.filter(photo => !gonePhotos.includes(photo))
    })

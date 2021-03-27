import chess from "../../../../../Assets/Images/PhotoStack/chess.jpg";
import Valday from "../../../../../Assets/Images/PhotoStack/Valday.jpg";
import Yalta from "../../../../../Assets/Images/PhotoStack/Yalta.jpg";
import bridge from "../../../../../Assets/Images/PhotoStack/bridge.jpg"
import mountain from "../../../../../Assets/Images/PhotoStack/mountain.jpg"
import loft from "../../../../../Assets/Images/PhotoStack/loft.jpg"


const SET_TOP_PHOTO_INDEX = "SET_TOP_PHOTO_INDEX";
const PHOTO_GONE = "PHOTO_GONE";
const ALL_PHOTOS_GONE = "ALL_PHOTOS_GONE";

const initState = {
    photos: [
        {url: bridge, width: 1152, height: 864},
        {url: Yalta, width: 1152, height: 864},
        {url: Valday, width: 1152, height: 864},
        {url: mountain, width: 1152, height: 864},
        {url: chess, width: 682, height: 965},
        {url: loft, width: 1152, height: 806},
    ],
    gonePhotos: [],
    topPhotoIndex: 5
}

const photoStackReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_TOP_PHOTO_INDEX:
            return {
                ...state,
                topPhotoIndex: action.topPhotoIndex
            }
        case PHOTO_GONE:
            return {
                ...state,
                gonePhotos: [...state.gonePhotos, action.photo]
            }
        case ALL_PHOTOS_GONE:
            return {
                ...state,
                gonePhotos: [],
                topPhotoIndex: state.photos.length - 1
            }
        default:
            return state
    }
}

export const setTopPhotoIndex = (topPhotoIndex) => ({
    type: SET_TOP_PHOTO_INDEX,
    topPhotoIndex
})

export const addGonePhoto = (photo) => ({
    type: PHOTO_GONE,
    photo
})

export const allPhotosGone = () => ({
    type: ALL_PHOTOS_GONE
})

export default photoStackReducer

import roof from "../../../../../Assets/Images/PhotoStack/roof-min.jpg";
import Abkhazia from "../../../../../Assets/Images/PhotoStack/Abkhazia-min.JPG";
import chess from "../../../../../Assets/Images/PhotoStack/chess-min.jpg";
import Valday from "../../../../../Assets/Images/PhotoStack/Valday-min.jpg";
import Crimea from "../../../../../Assets/Images/PhotoStack/Crimea-min.jpg";
import Bunker from "../../../../../Assets/Images/PhotoStack/Bunker-min.jpg";
import Crimea2 from "../../../../../Assets/Images/PhotoStack/Crimea-2-min.JPG";
import Crimea3 from "../../../../../Assets/Images/PhotoStack/Crimea-3-min.JPG";
import Valday3 from "../../../../../Assets/Images/PhotoStack/Valday-3-min.JPG";
import Yalta from "../../../../../Assets/Images/PhotoStack/Yalta-min.jpg";


const SET_TOP_PHOTO_INDEX = "SET_TOP_PHOTO_INDEX";
const PHOTO_GONE = "PHOTO_GONE";
const ALL_PHOTOS_GONE = "ALL_PHOTOS_GONE";

const initState = {
    photos: [
        {url: roof, width: 1296, height: 1944},
        {url: Abkhazia, width: 4288, height: 3216},
        {url: chess, width: 1333, height: 2000},
        {url: Valday, width: 2560, height: 1920},
        {url: Crimea, width: 2560, height: 1920},
        {url: Bunker, width: 2560, height: 1920},
        {url: Crimea2, width: 2304, height: 3072},
        {url: Crimea3, width: 3072, height: 2304},
        {url: Valday3, width: 3072, height: 2304},
        {url: Yalta, width: 3648, height: 2736}
    ],
    gonePhotos: [],
    topPhotoIndex: 9
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

import indexBackground from "../../Assets/Images/Backgrounds/notebook-1971495_1920.jpg";
import notepad from "../../Assets/Images/Backgrounds/notepad-min.png"
import contactsBackground from "../../Assets/Images/Backgrounds/background-contacts-mountain-min.jpeg";
import projectsBackground from "../../Assets/Images/Backgrounds/background-projects-wall-min.jpeg";
import skyImage from "../../Assets/Images/Backgrounds/background-contacts-sky-min.png"
import mountainImage from "../../Assets/Images/Backgrounds/background-contacts-mountain-min.png"
import fogImage from "../../Assets/Images/Backgrounds/background-contacts-fog-min.png"
import icebergImage from "../../Assets/Images/Backgrounds/background-contacts-iceberg-min.png"
import chess from "../../Assets/Images/PhotoStack/chess.jpg";
import Valday from "../../Assets/Images/PhotoStack/Valday.jpg";
import Yalta from "../../Assets/Images/PhotoStack/Yalta.jpg";
import bridge from "../../Assets/Images/PhotoStack/bridge.jpg"
import mountain from "../../Assets/Images/PhotoStack/mountain.jpg"
import loft from "../../Assets/Images/PhotoStack/loft.jpg"

const TOGGLE_HEADER_MENU = "TOGGLE_HEADER_MENU"

const initState = {
    imagesForPreloading: [
        indexBackground, notepad, contactsBackground, projectsBackground,
        skyImage, mountainImage, fogImage, icebergImage,
        chess, Yalta, Valday, bridge, mountain, loft
    ],
    isHeaderMenuOpen: false
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_HEADER_MENU:
            return {
                ...state,
                isHeaderMenuOpen: action.isHeaderMenuOpen
            }
        default:
            return state
    }
}

export const toggleHeaderMenu = (isHeaderMenuOpen) => ({
    type: TOGGLE_HEADER_MENU,
    isHeaderMenuOpen
})

export default appReducer

import indexBackground from "../../Assets/Images/Backgrounds/notebook-1971495_1920.jpg";
import notepad from "../../Assets/Images/Backgrounds/notepad-min.png"
import contactsBackground from "../../Assets/Images/Backgrounds/background-contacts-mountain-min.jpeg";
import projectsBackground from "../../Assets/Images/Backgrounds/background-projects-wall-min.jpeg";
import skyImage from "../../Assets/Images/Backgrounds/background-contacts-sky-min.png"
import mountainImage from "../../Assets/Images/Backgrounds/background-contacts-mountain-min.png"
import fogImage from "../../Assets/Images/Backgrounds/background-contacts-fog-min.png"
import icebergImage from "../../Assets/Images/Backgrounds/background-contacts-iceberg-min.png"
import roof from "../../Assets/Images/PhotoStack/roof-min.jpg";
import Abkhazia from "../../Assets/Images/PhotoStack/Abkhazia-min.JPG";
import chess from "../../Assets/Images/PhotoStack/chess-min.jpg";
import Valday from "../../Assets/Images/PhotoStack/Valday-min.jpg";
import Crimea from "../../Assets/Images/PhotoStack/Crimea-min.jpg";
import Bunker from "../../Assets/Images/PhotoStack/Bunker-min.jpg";
import Crimea2 from "../../Assets/Images/PhotoStack/Crimea-2-min.JPG";
import Crimea3 from "../../Assets/Images/PhotoStack/Crimea-3-min.JPG";
import Valday3 from "../../Assets/Images/PhotoStack/Valday-3-min.JPG";
import Yalta from "../../Assets/Images/PhotoStack/Yalta-min.jpg";

const TOGGLE_HEADER_MENU = "TOGGLE_HEADER_MENU"

const initState = {
    imagesForPreloading: [
        indexBackground, notepad, contactsBackground, projectsBackground,
        skyImage, mountainImage, fogImage, icebergImage,
        roof, Abkhazia, chess, Crimea,
        Crimea2, Crimea3, Yalta,
        Bunker, Valday, Valday3],
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

import { View,Text, } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

export function RatingMath (key) {
    rating = '' 
    switch (key) {
        case 1.0:
            rating = 'you'
            break;
        case 2.0:
            rating = [<FontAwesomeIcon icon={faStar} size={24} color='#FF9F45' style={{marginRight:5}}/>,
                      <FontAwesomeIcon icon={faStar} size={24} color='#FF9F45' style={{marginRight:5}}/> ] 
            break;
        case 3.0:
            rating = [<FontAwesomeIcon icon={faStar} size={24} color='#FF9F45' style={{marginRight:5}}/>,
                      <FontAwesomeIcon icon={faStar} size={24} color='#FF9F45' style={{marginRight:5}}/> ,
                      <FontAwesomeIcon icon={faStar} size={24} color='#FF9F45' style={{marginRight:5}}/> ]
        break;
        case 4.1:
            rating = [<FontAwesomeIcon icon={faStar} size={24} color='#FF9F45' style={{marginRight:5}}/>,
                      <FontAwesomeIcon icon={faStar} size={24} color='#FF9F45' style={{marginRight:5}}/>,
                      <FontAwesomeIcon icon={faStar} size={24} color='#FF9F45' style={{marginRight:5}}/>,
                      <FontAwesomeIcon icon={faStar} size={24} color='#FF9F45' style={{marginRight:5}}/> ]
         break;
         case 4.5:
            rating = [<FontAwesomeIcon icon={faStar} size={24} color='#FF9F45' style={{marginRight:5}}/>,
                      <FontAwesomeIcon icon={faStar} size={24} color='#FF9F45' style={{marginRight:5}}/>,
                      <FontAwesomeIcon icon={faStar} size={24} color='#FF9F45' style={{marginRight:5}}/>,
                      <FontAwesomeIcon icon={faStar} size={24} color='#FF9F45' style={{marginRight:5}}/> ]
            break;   
        default:
            break;
    }
    return(
        console.log(RatingMath(1.0))
    )
}


// rating.map(() => {})
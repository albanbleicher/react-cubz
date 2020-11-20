import { shuffle, random }  from 'lodash'
import { ADD_CUBE, SHUFFLE, CHANGE_ODD, STOP_ODD } from '../constants/actions'
export const reducer = (state, action) => {
    switch (action.type) {
      case ADD_CUBE:
        return [...state, {
            value:state.length+1,
            animated:false,
            color:random(0,8, false)
        }]
      case SHUFFLE:
        return shuffle(state)
        case STOP_ODD:
            console.log(state)
            return state.map((cube) => cube.value % 2 === 0 ? cube : { ...cube, animated: false })
          case CHANGE_ODD:
            return state.map((cube) => cube.value % 2 === 0 ? cube : { ...cube, animated: true })
      default:
        return state;
    }
  }
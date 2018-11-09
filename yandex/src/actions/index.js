import {
    flyInSetData,
    comeFlySetData,
    delayedFlightsSetData,
    searchSetData
} from '../consts/index';

export const flyInSetDataAction = value => {
    return {
      type: flyInSetData,
      payload: value
    }
}

export const comeFlySetDataAction = value => {
    return {
      type: comeFlySetData,
      payload: value
    }
}

export const delayedFlightsSetDataAction = value => {
    return {
      type: delayedFlightsSetData,
      payload: value
    }
}

export const searchSetDataAction = value => {
    return {
      type: searchSetData,
      payload: value
    }
}
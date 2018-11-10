import {setData} from '../consts/index';

export const SetDataAction = value => {
    return {
      type: setData,
      payload: value
    }
}

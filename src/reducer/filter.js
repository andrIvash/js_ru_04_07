import {DELETE_ARTICLE} from '../constants'
import {CHANGE_SELECTION} from '../constants'


const defaultFilters = {
  selected: [],
  dates: {
    form: null,
    to: null
  }
};

export default (filtersState = defaultFilters, action) => {
  const {type, payload} = action;

  switch (type) {
    case CHANGE_SELECTION:
      return {...filtersState, selected: payload.selected}
  }
  return filtersState
}
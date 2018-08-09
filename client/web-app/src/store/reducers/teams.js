const initialState = {
  data: [],
  loading: false,
  error: false,
};

const teams = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TEAMS_REQUEST':
      return { ...state, data: [], loading: true, error: false, }
    case 'FETCH_TEAMS_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: false, }
    case 'FETCH_TEAMS_ERROR':
      return { ...state, data: [], loading: false, error: true, }
    default:
      return state
  }
}

export default teams;
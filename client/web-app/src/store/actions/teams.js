const FETCH_TEAMS_REQUEST = "FETCH_TEAMS_REQUEST";
const FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS";
const FETCH_TEAMS_ERROR = "FETCH_TEAMS_ERROR";

const fetchTeamsRequest = () => ({
    type: FETCH_TEAMS_REQUEST,
});

const fetchTeamsSuccess = payload => ({
    type: FETCH_TEAMS_SUCCESS,
    payload,
});

const fetchTeamsError = () => ({
    type: FETCH_TEAMS_ERROR,
});

export const fetchTeams = () => dispatch => {
    dispatch(fetchTeamsRequest());

    return fetch(`${process.env.API_URL}/teams`)
    .catch(() => dispatch(fetchTeamsError()))
    .then(response => response.json())
    .then(json => dispatch(fetchTeamsSuccess(json)));
};

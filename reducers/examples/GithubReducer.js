
export const GithubStates = {
    REQUEST_SENT: 'GIT_REPOS_REQUEST_SENT',
    REQUEST_SUCCEEDED: 'GIT_REPOS_REQUEST_SUCCEEDED',
    REQUEST_FAILED: 'GIT_REPOS_REQUEST_FAILED',
};

let defaultState = {
    repos: []
};

export default function githubReducer(state = defaultState, action) {
    switch (action.type) {
        case GithubStates.REQUEST_SENT:
            return { ...state,
                loading: true };
        case GithubStates.REQUEST_SUCCEEDED:
            return { ...state,
                loading: false,
                repos: action.payload.data };
        case GithubStates.REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching repositories'
            };
        default:
            return state;
    }
}

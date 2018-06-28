
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
            return { ...state };
        case GithubStates.REQUEST_SUCCEEDED:
            return { ...state,
                repos: action.repos };
        case GithubStates.REQUEST_FAILED:
            return {
                ...state,
                error: 'Error while fetching repositories'
            };
        default:
            return state;
    }
}

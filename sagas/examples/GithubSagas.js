import request from "axios";
import {call, put, takeEvery} from "redux-saga/effects";
import {GithubStates} from "../../reducers/examples/GithubReducer";

export function* sendGithubRequest(action){
    try {
        let repositories = yield call(request.post, '', {})
        yield put({type: GithubStates.REQUEST_SUCCEEDED, repos: repositories})
    } catch (error){
        yield put({type: GithubStates.REQUEST_FAILED, error: error})
    }
}

export function* githubSagas(){
    yield takeEvery(GithubStates.REQUEST_SENT, sendGithubRequest);
}
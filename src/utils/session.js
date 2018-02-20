import { firebase } from '../fire';

// create a getSessionById which takes string key. If exists, return the session. If no, return null.
export async function getSessionById(sessionId) {
	
}

export async function getSession(){

	let ref = firebase.database().ref('sessions');
	ref.orderByKey().limitToLast
    return fetch(`${karaokeApi}/api/Session`)
    .then((response) => {return response.json()})
     .then((responseJson) => { return responseJson.sessionId});
}

export function createNewSessionIfNoneActive(){
  return fetch(`${karaokeApi}/api/Session`, {
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then((response) => { return response.json()})
  .then((responseJson) => {return responseJson.sessionId});
}
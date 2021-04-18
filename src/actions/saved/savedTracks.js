export const GET_SAVED_TRACKS_REQUEST = 'GET_SAVED_TRACKS_REQUEST'
export const GET_SAVED_TRACKS_SUCCESS = 'GET_SAVED_TRACKS_SUCCESS'

export function tracksSaved() {
	return (dispatch) => {
		dispatch({ type: GET_SAVED_TRACKS_REQUEST })
		;(async function () {
			let response = await fetch(
				'https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=' +
					localStorage.getItem('name') +
					'&api_key=19c87c749e5f33d6e21a5f3acdb9fc38&format=json'
			)
			response = await response.json()
			dispatch(tracksSavedSuccess(response.lovedtracks.track))
		})()
	}
}

const tracksSavedSuccess = (tracks) => ({
	type: GET_SAVED_TRACKS_SUCCESS,
	payload: [...tracks],
})

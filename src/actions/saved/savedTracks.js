export const GET_SAVED_TRACKS_REQUEST = 'GET_SAVED_TRACKS_REQUEST'
export const GET_SAVED_TRACKS_SUCCESS = 'GET_SAVED_TRACKS_SUCCESS'

export function tracksSaved() {
	return (dispatch) => {
		dispatch({ type: GET_SAVED_TRACKS_REQUEST })
		;(async function () {
			let response = await fetch(
				'https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=' +
					localStorage.getItem('name') +
					'&api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a&format=json'
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

export const GET_SAVED_ARTISTS_REQUEST = 'GET_SAVED_ARTISTS_REQUEST'
export const GET_SAVED_ARTISTS_SUCCESS = 'GET_SAVED_ARTISTS_SUCCESS'

export function artistsSaved() {
	return (dispatch) => {
		dispatch({ type: GET_SAVED_ARTISTS_REQUEST })
		;(async function () {
			let response = await fetch(
				'https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=' +
					localStorage.getItem('name') +
					'&api_key=9f7bad2c80dfde275231c603606e58d5&format=json'
			)
			response = await response.json()
			dispatch(artistsSavedSuccess(response.topartists.artist))
		})()
	}
}

const artistsSavedSuccess = (artists) => ({
	type: GET_SAVED_ARTISTS_SUCCESS,
	payload: [...artists],
})

export const GET_TOP_TRACKS_REQUEST = 'GET_TOP_TRACKS_REQUEST'
export const GET_TOP_TRACKS_SUCCESS = 'GET_TOP_TRACKS_SUCCESS'

export function tracksRequest() {
	return (dispatch) => {
		dispatch({ type: GET_TOP_TRACKS_REQUEST })
		;(async function () {
			let responseTracks = await fetch(
				'http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&limit=10' +
					'&api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a&format=json'
			)

			responseTracks = await responseTracks.json()
			dispatch(tracksRequestSucces(responseTracks.tracks.track))
		})()
	}
}

const tracksRequestSucces = (tracks) => ({
	type: GET_TOP_TRACKS_SUCCESS,
	payload: [...tracks],
})

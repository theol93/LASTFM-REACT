export const GET_TOP_TRACKS_REQUEST = 'GET_TOP_TRACKS_REQUEST'
export const GET_TOP_TRACKS_SUCCESS = 'GET_TOP_TRACKS_SUCCESS'

export function tracksRequest() {
	return (dispatch) => {
		dispatch({ type: GET_TOP_TRACKS_REQUEST })
		;(async function () {
			let responseTracks = await fetch(
				'https://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&limit=10' +
					'&api_key=7f3727d9e893a6231edffa32a2d7c871&format=json'
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

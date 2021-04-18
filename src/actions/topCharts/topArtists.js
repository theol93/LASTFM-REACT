export const GET_TOP_ARTISTS_REQUEST = 'GET_TOP_ARTISTS_REQUEST'
export const GET_TOP_ARTISTS_SUCCESS = 'GET_TOP_ARTISTS_SUCCESS'

export function artistsRequest() {
	return (dispatch) => {
		dispatch({ type: GET_TOP_ARTISTS_REQUEST })
		;(async function () {
			let responseArtist = await fetch(
				'https://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&limit=10' +
					'&api_key=19c87c749e5f33d6e21a5f3acdb9fc38&format=json'
			)
			responseArtist = await responseArtist.json()
			dispatch(artistsRequestSucces(responseArtist.artists.artist))
		})()
	}
}

const artistsRequestSucces = (artists) => ({
	type: GET_TOP_ARTISTS_SUCCESS,
	payload: [...artists],
})

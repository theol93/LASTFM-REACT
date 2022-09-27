export const GET_SEARCH_TRACKS_REQUEST = 'GET_SEARCH_TRACKS_REQUEST'
export const GET_SEARCH_TRACKS_SUCCESS = 'GET_SEARCH_TRACKS_SUCCESS'

export function searchTracks(url) {
	return (dispatch) => {
		dispatch({ type: GET_SEARCH_TRACKS_REQUEST });
		(async function () {
			let tracksSearch = await fetch(url)
			tracksSearch = await tracksSearch.json()
			tracksSearch = tracksSearch?.results?.trackmatches?.track
				.sort((a, b) => a.listeners - b.listeners)
				.reverse()

			dispatch(searchTracksSucces(tracksSearch))
		})()
	}
}

const searchTracksSucces = (tracks) => ({
	type: GET_SEARCH_TRACKS_SUCCESS,
	payload: tracks ? [...tracks] : [],
})

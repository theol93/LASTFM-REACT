export const GET_SEARCH_ARTISTS_REQUEST = 'GET_SEARCH_ARTISTS_REQUEST'
export const GET_SEARCH_ARTISTS_SUCCESS = 'GET_SEARCH_ARTISTS_SUCCESS'

export function searchArtists(url) {
	return (dispatch) => {
		dispatch({ type: GET_SEARCH_ARTISTS_REQUEST })

		;(async function () {
			let artistSearch = await fetch(url)
			artistSearch = await artistSearch.json()
			artistSearch = artistSearch.results.artistmatches.artist.sort((a, b) => a.listeners - b.listeners).reverse()

			dispatch(artistsSearchSuccess(artistSearch))
		})()
	}
}

const artistsSearchSuccess = (artists) => ({
	type: GET_SEARCH_ARTISTS_SUCCESS,
	payload: [...artists],
})

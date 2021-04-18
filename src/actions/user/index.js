export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST'
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'

export function getUserInfo() {
	return (dispatch) => {
		dispatch({ type: GET_USER_INFO_REQUEST })
		let url =
			'https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=' +
			localStorage.getItem('name') +
			'&api_key=19c87c749e5f33d6e21a5f3acdb9fc38&format=json'
		;(async function () {
			let response = await fetch(url)
			response = await response.json()
			dispatch(getUserInfoSuccess(response.user))
		})()
	}
}

const getUserInfoSuccess = (user) => ({
	type: GET_USER_INFO_SUCCESS,
	payload: { ...user },
})

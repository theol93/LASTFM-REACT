export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST'
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'

export function getUserInfo() {
	return (dispatch) => {
		dispatch({ type: GET_USER_INFO_REQUEST })
		let url =
			'http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=' +
			localStorage.getItem('name') +
			'&api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a&format=json'
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

export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";

export default function getUserInfo() {
	return (dispatch) => {
		dispatch({ type: GET_USER_INFO_REQUEST });

		(async function () {
			let name = localStorage.getItem("name");
			let url =
				"http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=" +
				name +
				"&api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a&format=json";

			let response = await fetch(url);
			response = await response.json();

			dispatch(getUserInfoSuccess(response));
		})();
	};
}

const getUserInfoSuccess = (info) => ({
	type: GET_USER_INFO_SUCCESS,
	payload: [...info],
});

import React from "react";
import { useLocation } from "react-router-dom";
import md5 from "md5/md5";

export default function Token() {
	let location = useLocation();
	let path = location.search.split("=");

	(async function getSession() {
		localStorage.setItem("token", path[1]);
		let token = localStorage.getItem("token");
		let md5Key =
			"api_keye9fcdc63353cd735a0d4ae4cbf86ab6amethodauth.getSessiontoken" +
			token +
			"72f025ee47b0cc1d710967db9d1a6202";
		let md5Hash = md5(md5Key);
		let url =
			"http://ws.audioscrobbler.com/2.0/?method=auth.getSession&token=" +
			token +
			"&api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a&api_sig=" +
			md5Hash +
			"&format=json";

		let response = await fetch(url);
		response = await response.json();

		localStorage.setItem("name", response.session.name);
		localStorage.setItem("key", response.session.key);
		window.location.href = "/";
	})();

	return <div />;
}
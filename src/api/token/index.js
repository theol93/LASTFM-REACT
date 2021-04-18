import React from 'react'
import { useLocation } from 'react-router-dom'
import md5 from 'md5/md5'

export default function Token() {
	let location = useLocation()

	let path = location.search.split('=')

	;(async function getSession() {
		localStorage.setItem('token', path[1])
		let token = localStorage.getItem('token')
		let md5Key =
			'api_keyc8888bf8dd181e95100eecf02f6465a2methodauth.getSessiontoken' +
			token +
			'7b2b94cc49e426438d3cacdd10a63922'
		let md5Hash = md5(md5Key)
		let url =
			'http://ws.audioscrobbler.com/2.0/?method=auth.getSession&token=' +
			token +
			'&api_key=c8888bf8dd181e95100eecf02f6465a2&api_sig=' +
			md5Hash +
			'&format=json'
		localStorage.setItem('url', url)
		let response = await fetch(url)
		response = await response.json()

		localStorage.setItem('name', response.session.name)
		localStorage.setItem('key', response.session.key)
		window.location.href = '/'
	})()

	return <div />
}

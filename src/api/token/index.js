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
			'api_key7f3727d9e893a6231edffa32a2d7c871methodauth.getSessiontoken' +
			token +
			'7f3727d9e893a6231edffa32a2d7c871'
		let md5Hash = md5(md5Key)
		let url =
			'https://ws.audioscrobbler.com/2.0/?method=auth.getSession&token=' +
			token +
			'&api_key=7f3727d9e893a6231edffa32a2d7c871&api_sig=' +
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

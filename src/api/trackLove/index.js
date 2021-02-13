import { getApiSignature } from '../signature'

export async function trackLove(e, track, artist) {
	let params = {}
	params.method = 'track.love'

	let url = 'http://ws.audioscrobbler.com/2.0/?method=track.love'
	let track_url = '&track=' + encodeURI(track)
	let artist_url = '&artist=' + encodeURI(artist)
	let api_key = '&api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a'
	let sk = '&sk=' + localStorage.getItem('key')


	params.api_key = 'e9fcdc63353cd735a0d4ae4cbf86ab6a'
	params.sk = localStorage.getItem('key')
	params.track = track
	params.artist = artist

	let api_sig = getApiSignature(params)
	let api_sigStr = '&api_sig=' + api_sig
	let urlFull =
		url +
		track_url +
		artist_url +
		api_key +
		api_sigStr +
		sk +
		'&format=json'
	console.log('URL:', api_sig)

	await fetch(urlFull, { method: 'POST' })
	window.location.href = '/saved'
}

async function trackUnlove(e, track, artist) {
	let params = {}
	params.method = 'track.unlove'

	let url = 'http://ws.audioscrobbler.com/2.0/?method=track.unlove'
	let track_url = '&track=' + encodeURI(track)
	let artist_url = '&artist=' + encodeURI(artist)
	let api_key = '&api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a'
	let sk = '&sk=' + localStorage.getItem('key')



	params.api_key = 'e9fcdc63353cd735a0d4ae4cbf86ab6a'
	params.sk = localStorage.getItem('key')
	params.track = track
	params.artist = artist

	let api_sig = getApiSignature(params)
	let api_sigStr = '&api_sig=' + api_sig
	let urlFull =
		url +
		track_url +
		artist_url +
		api_key +
		api_sigStr +
		sk +
		'&format=json'
	console.log('URL:', api_sig)

	await fetch(urlFull, { method: 'POST' })
	window.location.reload()
}
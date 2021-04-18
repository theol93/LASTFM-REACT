import md5 from 'md5'

export function trackFormatUrl(params, track, artist) {
	let track_url = '&track=' + encodeURI(track)
	let artist_url = '&artist=' + encodeURI(artist)
	let api_key = '&api_key=19c87c749e5f33d6e21a5f3acdb9fc38'
	let sk = '&sk=' + localStorage.getItem('key')
	let url = 'http://ws.audioscrobbler.com/2.0/?method='

	params.api_key = '19c87c749e5f33d6e21a5f3acdb9fc38'
	params.sk = localStorage.getItem('key')
	params.track = track
	params.artist = artist

	let api_sig = getApiSignature(params)
	let api_sigStr = '&api_sig=' + api_sig
	let urlFull =
		url +
		params.method +
		track_url +
		artist_url +
		api_key +
		api_sigStr +
		sk +
		'&format=json'

	return urlFull
}

function getApiSignature(params) {
	let keys = Object.keys(params)
	let string = ''

	keys.sort()
	keys.forEach(function (key) {
		string += key + params[key]
	})

	string += '19c87c749e5f33d6e21a5f3acdb9fc38'

	return md5(string)
}

export async function trackLove(track, artist) {
	console.log('love')
	let params = {}
	params.method = 'track.love'

	let urlFull = trackFormatUrl(params, track, artist)

	await fetch(urlFull, { method: 'POST' })
	window.location.href = '/saved'
}

export async function trackUnlove(track, artist) {
	console.log('unlove')
	let params = {}
	params.method = 'track.unlove'

	let urlFull = trackFormatUrl(params, track, artist)

	await fetch(urlFull, { method: 'POST' })
	window.location.reload()
}

export async function scrobble(inputArtist, inputTrack) {
	let params = {}
	let textArtist = inputArtist.current.value
	let textTrack = inputTrack.current.value

	let url = 'http://ws.audioscrobbler.com/2.0/?method=track.scrobble'
	let artist = '&artist=' + encodeURI(textArtist)
	let track = '&track=' + encodeURI(textTrack)
	let api_key = '&api_key=19c87c749e5f33d6e21a5f3acdb9fc38'
	let sk = '&sk=' + localStorage.getItem('key')

	params.method = 'track.scrobble'
	params.api_key = '19c87c749e5f33d6e21a5f3acdb9fc38'
	params.sk = localStorage.getItem('key')
	params.track = textTrack
	params.artist = textArtist
	params.timestamp = +new Date() / 1000

	let api_sig = getApiSignature(params)
	let api_sigStr = '&api_sig=' + api_sig
	let urlFull =
		url +
		artist +
		track +
		'&timestamp=' +
		params.timestamp +
		api_key +
		api_sigStr +
		sk +
		'&format=json'

	await fetch(urlFull, { method: 'POST' })
	window.location.href = '/saved'
}

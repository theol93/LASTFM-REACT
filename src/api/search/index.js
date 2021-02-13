import md5 from 'md5'

export function getUrl(type, text) {
	const start = 'http://ws.audioscrobbler.com/2.0/?method='
	const apiKey = '&api_key=ae106d678c11a00457038f9cd9ad465d&format=json'

	if (text !== '') {
		let typeCode = ''

		switch (type) {
			case 'artist':
				typeCode = 'artist.search&artist=';
				return (start + typeCode + text + apiKey)
			case 'track':
				typeCode = 'track.search&track=';
				return (start + typeCode + text + apiKey)
			default:
				return null;
		}
	}
}

export function getApiSignature(params) {
	let keys = Object.keys(params)
	let string = ''

	keys.sort()
	keys.forEach(function (key) {
		string += key + params[key]
	})

	string += '72f025ee47b0cc1d710967db9d1a6202'
	/* Needs lastfm.api.md5.js. */
	return md5(string)
}

export async function trackLove(e, track, artist) {
	let params = {}

	let url = 'http://ws.audioscrobbler.com/2.0/?method=track.love'
	let track_url = '&track=' + encodeURI(track)
	let artist_url = '&artist=' + encodeURI(artist)
	let api_key = '&api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a'
	let sk = '&sk=' + localStorage.getItem('key')

	params.method = 'track.love'
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




/* function isLoved(props){
		console.log(props)
		//if() return (<FavoriteBorderIcon />) else return (<FavoriteIcon />)
	}*/

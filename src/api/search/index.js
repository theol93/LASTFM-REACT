export function getUrl(type, text) {
	const start = 'https://ws.audioscrobbler.com/2.0/?method='
	const apiKey = '&api_key=7f3727d9e893a6231edffa32a2d7c871&format=json'

	let typeCode = '';
	let parsedText = '';

	if (text === '') {
		parsedText = '&'
	} else {
		parsedText = text
	}

	switch (type) {
		case 'artist':
			typeCode = 'artist.search&artist='
			return start + typeCode + parsedText + apiKey
		case 'track':
			typeCode = 'track.search&track='
			return start + typeCode + parsedText + apiKey
		default:
			return null
	}
}

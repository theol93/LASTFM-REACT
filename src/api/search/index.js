export function getUrl(type, text) {
	const start = 'https://ws.audioscrobbler.com/2.0/?method='
	const apiKey = '&api_key=c8888bf8dd181e95100eecf02f6465a2&format=json'

	if (text !== '') {
		let typeCode = ''

		switch (type) {
			case 'artist':
				typeCode = 'artist.search&artist='
				return start + typeCode + text + apiKey
			case 'track':
				typeCode = 'track.search&track='
				return start + typeCode + text + apiKey
			default:
				return null
		}
	}
}

export function getUrl(type, text) {
	const start = 'https://ws.audioscrobbler.com/2.0/?method='
	const apiKey = '&api_key=9f7bad2c80dfde275231c603606e58d5&format=json'

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

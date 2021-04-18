export function getUrl(type, text) {
	const start = 'https://ws.audioscrobbler.com/2.0/?method='
	const apiKey = '&api_key=19c87c749e5f33d6e21a5f3acdb9fc38&format=json'

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

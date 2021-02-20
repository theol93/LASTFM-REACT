export function getUrl(type, text) {
	const start = 'http://ws.audioscrobbler.com/2.0/?method='
	const apiKey = '&api_key=ae106d678c11a00457038f9cd9ad465d&format=json'

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

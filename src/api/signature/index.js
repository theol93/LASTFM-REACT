import md5 from 'md5'

export function getApiSignature(params) {
	let keys = Object.keys(params)
	let string = ''

	keys.sort()
	keys.forEach(function (key) {
		string += key + params[key]
	})

	string += '847b832fe7223a9c89f2b47a0da93a57'

	return md5(string)
}

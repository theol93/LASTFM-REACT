import md5 from 'md5'

export function getApiSignature(params) {
	let keys = Object.keys(params)
	let string = ''

	keys.sort()
	keys.forEach(function (key) {
		string += key + params[key]
	})

	string += '7b2b94cc49e426438d3cacdd10a63922'

	return md5(string)
}

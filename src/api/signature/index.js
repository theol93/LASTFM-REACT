import md5 from 'md5'

export function getApiSignature(params) {
	let keys = Object.keys(params)
	let string = ''

	keys.sort()
	keys.forEach(function (key) {
		string += key + params[key]
	})

	string += '19c87c749e5f33d6e21a5f3acdb9fc38'

	return md5(string)
}

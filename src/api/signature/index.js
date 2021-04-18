import md5 from 'md5'

export function getApiSignature(params) {
	let keys = Object.keys(params)
	let string = ''

	keys.sort()
	keys.forEach(function (key) {
		string += key + params[key]
	})

	string += '7f3727d9e893a6231edffa32a2d7c871'

	return md5(string)
}

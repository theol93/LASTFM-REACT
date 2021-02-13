import md5 from 'md5'

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
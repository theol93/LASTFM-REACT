import React, { useRef } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import md5 from 'md5'

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			marginTop: '25px',
			margin: theme.spacing(1),
			width: '300px',
			maxWidth: '100%',
		},
	},
	btn: {
		marginTop: '25px',
		border: 0,
		marginLeft: '15px',
		borderRadius: 13,
		height: 54,
		padding: '0 80px',
		width: 100,
	},
}))

export default function Scrobble() {
	const classes = useStyles()
	const inputArtist = useRef(null)
	const inputTrack = useRef(null)

	function getApiSignature(params) {
		let keys = Object.keys(params)
		let string = ''

		keys.sort()
		keys.forEach(function (key) {
			string += key + params[key]
		})

		string += '72f025ee47b0cc1d710967db9d1a6202'

		return md5(string)
	}

	async function scrobble() {
		let params = {}
		let textArtist = inputArtist.current.value
		let textTrack = inputTrack.current.value

		let url = 'http://ws.audioscrobbler.com/2.0/?method=track.scrobble'
		let artist = '&artist=' + encodeURI(inputArtist.current.value)
		let track = '&track=' + encodeURI(inputTrack.current.value)
		let timestamp = +new Date() / 1000
		let api_key = '&api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a'
		let sk = '&sk=' + localStorage.getItem('key')

		params.method = 'track.scrobble'
		params.api_key = 'e9fcdc63353cd735a0d4ae4cbf86ab6a'
		params.sk = localStorage.getItem('key')
		params.track = textTrack
		params.artist = textArtist
		params.timestamp = timestamp

		let api_sig = getApiSignature(params)
		let api_sigStr = '&api_sig=' + api_sig
		let urlFull =
			url +
			artist +
			track +
			'&timestamp=' +
			timestamp +
			api_key +
			api_sigStr +
			sk +
			'&format=json'

		await fetch(urlFull, { method: 'POST' })
		window.location.href = '/saved'
	}

	return (
		<Container component="main" align="center">
			<form className={classes.root} noValidate autoComplete="on">
				<TextField
					id="outlined-secondary"
					variant="outlined"
					color="primary"
					placeholder="Исполнитель"
					inputRef={inputArtist}
				/>
				<TextField
					id="outlined-secondary"
					variant="outlined"
					color="primary"
					placeholder="Название песни"
					inputRef={inputTrack}
				/>
			</form>
			<Button
				className={classes.btn}
				color="primary"
				variant="contained"
				onClick={() => scrobble()}
			>
				СКРОБЛ
			</Button>
		</Container>
	)
}
/*
	https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=0aa2e9944f3e38f7a64358dde668ff63
	&artist=Chimaira+&track=Ressurection&album=&albumArtist=&ows_scrobbleUUID=kxk_oGyGxR&format=json
*/

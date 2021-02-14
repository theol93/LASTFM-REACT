import React, { useRef } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import { scrobble } from '../../api/track/index'

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
	const inputArtist = useRef("")
	const inputTrack = useRef("")

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
				onClick={() => scrobble(inputArtist, inputTrack)}
			>
				Добавить
			</Button>
		</Container>
	)
}
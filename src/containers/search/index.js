import React, { useEffect, useRef, useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import { getUrl } from '../../api/search/index'
import SearchArtists from './searchArtists'
import SearchTracks from './searchTracks'

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
		width: '65vw',
		paddingTop: '15px',
	},
	demo: {
		position: 'center',
		backgroundColor: 'rgb(245, 245, 245)',
		border: '1px solid #DDD',
	},
	root: {
		'& > *': {
			marginTop: '25px',
			margin: theme.spacing(1),
			width: '500px',
		},
	},
	paper: {
		color: theme.palette.text.secondary,
		backgroundColor: 'rgb(240,240,240)',
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

export default function Search(props) {
	const classes = useStyles()
	const {
		artistsSearch,
		artistsSearchIsFetching,
		setSearchArtists,
		tracksSearch,
		tracksSearchIsFetching,
		setSearchTracks,
		setTracksSaved,
		tracksSavedIsFetching,
		tracksSaved
	} = props

	const inputEl = useRef(null)
	const [clickType, setClickType] = useState('')
	useEffect( () => { setTracksSaved() }, [setTracksSaved])

	function renderSearch() {
		if (tracksSavedIsFetching === false){
			switch (clickType) {
				case 'track':
					return (
						<SearchTracks
							tracksSearch={tracksSearch}
							tracksSearchIsFetching={tracksSearchIsFetching}
							setSearchTracks={setSearchTracks}
							url={getUrl('track', inputEl.current.value)}
							tracksSaved={tracksSaved}
							tracksSavedIsFetching={tracksSavedIsFetching}
						/>
					)
				case 'artist':
					return (
						<SearchArtists
							artistsSearch={artistsSearch}
							artistsSearchIsFetching={artistsSearchIsFetching}
							setSearchArtists={setSearchArtists}
							url={getUrl('artist', inputEl.current.value)}
						/>
					)
				default:
					return ''
			}

		} else return ''

	}

	return (
		<Container component="main" align="center">
			<form className={classes.root} noValidate autoComplete="on">
				<TextField
					id="outlined-secondary"
					variant="outlined"
					color="primary"
					placeholder="Введите строку для поиска в это поле"
					inputRef={inputEl}
				/>
				<Button
					className={classes.btn}
					color="primary"
					variant="contained"
					onClick={() => {
						setClickType('track')
					}}
				>
					ПЕСНЯ
				</Button>
				<Button
					className={classes.btn}
					color="primary"
					variant="contained"
					onClick={() => {
						setClickType('artist')
					}}
				>
					АВТОР
				</Button>
			</form>
			{renderSearch()}
		</Container>
	)
}

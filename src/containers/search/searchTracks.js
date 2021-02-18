import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import AlbumIcon from '@material-ui/icons/Album'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { trackUnlove } from '../../api/track'
import { trackLove } from '../../api/track'
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp'

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

export default function SearchTracks(props) {
	const classes = useStyles()
	const {
		tracksSearchIsFetching,
		tracksSearch,
		setSearchTracks,
		url,
		tracksSaved,
	} = props

	function ListItemLink(props) {
		return <ListItem button component="a" {...props} />
	}

	useEffect(() => setSearchTracks(url), [setSearchTracks, url])

	function asTrackSaved(value) {
		let div = (
			<ListItemSecondaryAction>
				<IconButton
					edge="end"
					variant="contained"
					aria-label="delete"
					onClick={() => trackLove(value.name, value.artist)}
				>
					<FavoriteBorderIcon />
				</IconButton>
			</ListItemSecondaryAction>
		)
		if (tracksSaved.tracksSaved.length > 0) {
			for (let i = 0; i < tracksSaved.tracksSaved.length; i++) {
				console.log(value.artist)
				if (tracksSaved.tracksSaved[i].name === value.name && tracksSaved.tracksSaved[i].artist.name === value.artist) {
					return div = (<ListItemSecondaryAction key={i}>
						<IconButton
							edge="end"
							variant="contained"
							aria-label="delete"
							onClick={() =>
								trackUnlove(value.name, value.artist)
							}
						>
							<FavoriteSharpIcon />
						</IconButton>
					</ListItemSecondaryAction>)
				} else {
					div = (
						<ListItemSecondaryAction key={i}>
							<IconButton
								edge="end"
								variant="contained"
								aria-label="delete"
								onClick={() => trackLove(value.name, value.artist)}
							>
								<FavoriteBorderIcon />
							</IconButton>
						</ListItemSecondaryAction>
					)
				}
			}
		}
		return div
	}

	function asLogin(value) {
		return localStorage.getItem('name') !== null ? asTrackSaved(value) : ''
	}

	return (
		<Container component="main" align="center">
			{tracksSearchIsFetching !== true ? (
				<Container align="center" className={classes.grow}>
					{tracksSearch.map((value, index) => {
						return (
							<Paper key={index}>
								<div className={classes.demo}>
									<List>
										{
											<ListItem>
												<ListItemAvatar>
													<AlbumIcon />
												</ListItemAvatar>
												<ListItemText
													primary={value.name}
													secondary={value.artist}
												/>
												<Button variant="contained">
													<ListItemLink
														href={value.url}
														target={'_blank'}
													>
														<PlayArrowIcon />
													</ListItemLink>
												</Button>
												{asLogin(value)}
											</ListItem>
										}
									</List>
								</div>
							</Paper>
						)
					})}
				</Container>
			) : (
				''
			)}
		</Container>
	)
}

/* return tracksSaved.tracksSaved.map((track, index) => {
					console.log(
						track.name === value.name &&
						track.artist.name === value.artist
					)
					return track.name === value.name &&
					track.artist.name === value.artist ? (
						<ListItemSecondaryAction key={index}>
							<IconButton
								edge="end"
								variant="contained"
								aria-label="delete"
								onClick={() =>
									trackUnlove(value.name, value.artist)
								}
							>
								<FavoriteSharpIcon />
							</IconButton>
						</ListItemSecondaryAction>
					) : (
						<ListItemSecondaryAction key={index}>
							<IconButton
								edge="end"
								variant="contained"
								aria-label="delete"
								onClick={() => trackLove(value.name, value.artist)}
							>
								<FavoriteBorderIcon />
							</IconButton>
						</ListItemSecondaryAction>
					)
				})
			}
			*/

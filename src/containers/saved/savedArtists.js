import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import Container from '@material-ui/core/Container'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		maxWidth: '65vw',
		paddingTop: '15px',
	},
	demo: {
		position: 'center',
		backgroundColor: 'rgb(245, 245, 245)',
		border: '1px solid #DDD',
	},
	title: {
		margin: theme.spacing(4, 0, 2),
	},
	top: {
		marginTop: '20px',
	},
	grow: {
		marginTop: '10px',
		flexGrow: 1,
	},
}))

export default function SavedArtists(props) {
	const classes = useStyles()
	const {
		artistsSaved,
		artistsSavedIsFetching,
		setArtistsSaved,
	} = props

	useEffect(() => {
		setArtistsSaved()
	}, [setArtistsSaved])

	function ListItemLink(props) {
		return <ListItem button component="a" {...props} />
	}

	return (
		<>
			{artistsSavedIsFetching === false ? (
				<Container align="center" className={classes.grow}>
					<Grid className={classes.root}>
						<Grid
							container
							spacing={3}
							justify="center"
							alignItems="center"
						>
							<Grid item xs={12}>
								{artistsSaved.artistsSaved.map((artist, i) => {
									return (
										<Paper key={i}>
											<div className={classes.demo}>
												<List>
													{
														<ListItem>
															<ListItemAvatar>
																<LibraryMusicIcon />
															</ListItemAvatar>
															<ListItemText
																primary={
																	artist.name
																}
															/>
															<ListItemSecondaryAction>
																<Button variant="contained">
																	<ListItemLink
																		href={
																			artist.url
																		}
																		target={
																			'_blank'
																		}
																	>
																		<PlayArrowIcon />
																	</ListItemLink>
																</Button>
															</ListItemSecondaryAction>
														</ListItem>
													}
												</List>
											</div>
										</Paper>
									)
								})}
							</Grid>
						</Grid>
					</Grid>
				</Container>
			) : (
				''
			)}
		</>
	)
}

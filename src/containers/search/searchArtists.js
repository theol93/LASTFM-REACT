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
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import AlbumIcon from '@material-ui/icons/Album'

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

export default function SearchArtists(props) {
	const classes = useStyles()

	let artistsSearch = props.artistsSearch
	let artistsSearchIsFetching = props.artistsSearchIsFetching
	let setSearchArtists = props.setSearchArtists
	let url = props.url

	function ListItemLink(props) {
		return <ListItem button component="a" {...props} />
	}

	useEffect( () => setSearchArtists(url), [setSearchArtists, url])

	return (
		<Container component="main" align="center">
			{artistsSearchIsFetching !== true ? (
				<Container align="center" className={classes.grow}>
					{artistsSearch.map((value, index) => {
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
													secondary={'Artist'}
												/>
												<ListItemSecondaryAction>
													<Button variant="contained">
														<ListItemLink
															href={value.url}
															target={'_blank'}
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
				</Container>
			) : (
				''
			)}
		</Container>
	)
}

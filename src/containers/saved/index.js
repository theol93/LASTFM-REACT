import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SavedArtists from './savedArtists'
import SavedTracks from './savedTracks'

export default function Saved(props) {
	const {
		tracksSaved,
		artistsSaved,
		artistsSavedIsFetching,
		tracksSavedIsFetching,
		setArtistsSaved,
		setTracksSaved,
	} = props

	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	function renderSavedPage() {
		if (value === 0) {
			return (
				<SavedTracks
					tracksSaved={tracksSaved}
					tracksSavedIsFetching={tracksSavedIsFetching}
					setTracksSaved={setTracksSaved}
				/>
			)
		} else {
			return (
				<SavedArtists
					artistsSaved={artistsSaved}
					artistsSavedIsFetching={artistsSavedIsFetching}
					setArtistsSaved={setArtistsSaved}
				/>
			)
		}
	}

	return (
		<>
			<Paper>
				<Tabs value={value} onChange={handleChange} centered>
					<Tab label={<h4>песни</h4>} />
					<Tab label={<h4>исполнители</h4>} />
				</Tabs>
			</Paper>
			{renderSavedPage()}
		</>
	)
}

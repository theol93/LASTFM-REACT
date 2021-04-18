import React from 'react'
import gif from './page404.gif'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	image: {
		maxHeight: '400px',
	},
}))

export default function () {
	const style = useStyles()

	return (
		<Container component="main" maxWidth="sm" align="center">
			<h2>Страница не найдена...</h2>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="default"
				href={'/'}
			>
				Нажмите, чтобы вернуться на главную.
			</Button>
			<img className={style.image} src={gif} alt="404" />
		</Container>
	)
}

import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		margin: '10px',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
}))

export default function SignIn() {
	const classes = useStyles()

	return (
		<Container component="main" maxWidth="sm" align="center">
			<div className={classes.paper}>
				<Grid container className={classes.root} spacing={2}>
					<Grid item xs={12}>
						<Grid container justify="center">
							<Grid key={0} item className={classes.paper}>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
									href={
										'http://www.last.fm/api/auth/?api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a'
									}
								>
									Войти
								</Button>
							</Grid>
							<Grid key={1} item className={classes.paper}>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="default"
									className={classes.submit}
									href={'https://www.last.fm/ru/join'}
									target="_blank"
								>
									Зарегистрироваться
								</Button>
							</Grid>
						</Grid>
						<div
							key={2}
							style={{ color: 'grey', paddingTop: '50px' }}
						>
							<h2>Test data for LastFM:</h2>
							<h3>Login: theol1993</h3>
							<h3>Password: !1111qqqq</h3>
						</div>
					</Grid>
				</Grid>
			</div>
		</Container>
	)
}
/*
    Login: theol1993
    Password: !1111qqqq


    Application name	react last-fm
    API key	e9fcdc63353cd735a0d4ae4cbf86ab6a
    Shared secret	72f025ee47b0cc1d710967db9d1a6202
    Registered to	theol1993

    api_key[e9fcdc63353cd735a0d4ae4cbf86ab6a]methodauth.getSessiontoken[my token][72f025ee47b0cc1d710967db9d1a6202]

    ws.audioscrobbler.com/2.0/?method=auth.getSession&token=[маркер]&api_key=[ключ api]&api_sig=[мой новый MD5 в выходной]
 */
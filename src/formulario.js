import { Paper, Typography,  Button, CssBaseline, TextField, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import jacare from "./image/jacare.jpg";

const useStyles = makeStyles((theme) => ({
    image: {
      backgroundImage: 'url('+ jacare+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      marginTop: 80,
      marginLeft: 50,
      marginRight: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      marginTop: 10,
      width: '100%',
    },
    submit: {
      width: '99%',
      marginTop: 10,
      marginRight: 50,
    },
  }));

 const Formulario = ({ atual }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" style={{ height: '100vh' }} >
      <CssBaseline />
      <Grid item xs={4} sm={4} md={7} className={classes.image} />
      <Grid item xs={8} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" color="primary">
            Fazer o login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Usuario"
              name="usuario"
              autoComplete="user"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
            />
            <Grid container>
              <Grid item xs>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Entrar
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={ atual }
                >
                Mudar tema
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Formulario
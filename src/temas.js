import { createMuiTheme } from '@material-ui/core/styles'

const temaEscuro = createMuiTheme(({
    palette: {
        type: 'dark',
        primary: {
          main: '#FFC0CB',
        },
        background: {
          default: '#333',
          paper: '#000',
        },
      },
}))

const temaClaro = createMuiTheme(({
    palette: {
        type: 'light',
        primary: {
          main: '#DC143C',
        },
        background: {
          default: '#ccc',
          paper: '#fff',
        },

      },    

}))



export { temaEscuro, temaClaro }
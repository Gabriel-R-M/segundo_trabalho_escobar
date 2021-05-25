import { useState } from 'react'
import Formulario from './formulario'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { temaEscuro, temaClaro} from './temas'

const App = () => {

    const [ atual, setTema ] = useState( temaClaro )
    const [ claro, setClaro ] = useState( true )

    const mudarTema = () => {
        var element = document.getElementById("foto");
        if (claro) {
            setTema( temaEscuro )
            element.classList.remove("imagem");
            element.classList.add("imagem2");
        }
        else{
            setTema( temaClaro )
            element.classList.remove("imagem2");
            element.classList.add("imagem");
        }

        setClaro( !claro )
    }

    return (
        <ThemeProvider theme={ atual }>
            <CssBaseline />
            <Formulario atual={ mudarTema }/>            
        </ThemeProvider>
    )
}

export default App
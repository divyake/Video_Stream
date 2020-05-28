import React, {useState, useEffect} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components'


const GlobalStyle =createGlobalStyle `
body{
    background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#EEE'};
    color : ${props => props.theme.mode === 'dark' ? '#EEE' : '#111 '}
}
`
function DarkTheme(theming) {
    const [theme, setTheme] = useState( {mode: 'dark'});
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
        </ThemeProvider>
    )
}

export default DarkTheme;
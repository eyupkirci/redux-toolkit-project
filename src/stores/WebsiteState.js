import { createSlice } from '@reduxjs/toolkit'

const website = createSlice({

    name: 'website',
    initialState: {
        dark: true,
        language: 'tr'
    },
    reducers: {
        setDarkMode: state => { state.dark = !state.dark },
        setLanguage: (state, action) => {state.language = action.payload}
     }

})
export const {setDarkMode, setLanguage} = website.actions


export default website.reducer

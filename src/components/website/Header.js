import React from 'react'
import {useSelector} from 'react-redux'

const Header = () => {
    const {dark, language} = useSelector(state => state.website)
    return (
        <div>
            <div>Dark mode = {dark? 'evet':'hayır'}</div>
            <div>Lamguage = {language}</div>
        </div>
    )
}

export default Header

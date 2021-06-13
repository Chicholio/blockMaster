import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/authAction'
import NavBar from '../../components/sideBar/NavBar'

const Home = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <div style={{color: 'white'}}>
            <NavBar />
        </div>
    )
}

export default Home

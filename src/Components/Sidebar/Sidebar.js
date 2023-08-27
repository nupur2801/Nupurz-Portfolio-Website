import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar-maincontainer'>
            <div className='followme-container'>
                <p>Follow Me</p>
            </div>
            <div className='line'></div>
            <div className='side-icons'>
                <a className='icons' href='https://instagram.com/nups_281?igshid=ZGUzMzM3NWJiOQ=='><InstagramIcon></InstagramIcon></a>
                <a className='icons' href='https://github.com/nupur2801/nupur2801.git'><GitHubIcon></GitHubIcon> </a>
            </div>

        </div>
    )
}

export default Sidebar
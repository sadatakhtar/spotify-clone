import React from 'react'
import './SideBar.css';
import SideBarOptions from './SideBarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';

function SideBar() {

    const [{playlists} ] = useDataLayerValue();
    return (
        <div className="sideBar">
            <img className="sideBar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo"
            />
            <SideBarOptions Icon={HomeIcon} title="Home"/>
            <SideBarOptions Icon={SearchIcon} title="Search"/>
            <SideBarOptions Icon={LibraryMusicIcon} title="Your Library"/>
            <br />
            <strong className="sideBar_title">PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map(playlist => (
                <SideBarOptions  title={playlist.description}/>
            ))}
            
           

        </div>
    )
}

export default SideBar

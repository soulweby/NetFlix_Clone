import React from 'react'
import { useState, useEffect } from "react";
import PlayArrowIcon  from '@material-ui/icons/PlayArrow';
import  HelpOutlineIcon  from '@material-ui/icons/HelpOutline';
import "./Banner.scss";
import QuickView from './QuickView';
import requests from "../Request"
import axios from "axios";
import useSound from "use-sound";
import NetflixIntroSong from "../asset/NetflixIntroSong.mp3"



export default function Banner() {

    const [movie, setMovie] = useState ([]);
    const [modal, setModal] = useState (false);
   
   
    function handleClickModal() {
        modal ? setModal(false) : setModal(true);
       
    }
    const [playSound] = useSound(NetflixIntroSong)

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
        } 
        fetchData();
    }, []);

    function truncateText(string, n) {
        return string?.length > n
        ? string.substr(0, n - 1) + "..." : "No description";
    }
    const bannerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
    };



    return (
        <header className='banner' style={bannerStyle} >
            <div className='bannerContent'>
                <h1 className='bannerTitle'>{movie?.title || movie.name || movie?.original_title}</h1>
                {/* <p>{movie?.overview}</p> */}
                <p>{truncateText(movie?.overview, 150)}</p>
                <div className='bannerButtons'>
                    <button className=' bannerButton bannerButtonPlay' >
                    <PlayArrowIcon />Lecture
                    </button>
                    <button className=' bannerButton' onClick={handleClickModal} onMouseEnter={playSound} >
                    <HelpOutlineIcon />  Plus d'infos
                  

                    </button>
                </div>
            </div>

            <QuickView  bannerStyle={bannerStyle} movie={movie}
             modal={handleClickModal}
            modalStatut={modal}
         />
        </header>
    )
}

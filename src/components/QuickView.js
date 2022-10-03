import React from 'react'
import "./QuickView.scss"
import CancelIcon from "@material-ui/icons/Cancel"


export default function QuickView({bannerStyle, movie, modal, modalStatut}) {




  return (
    <div className={`quick ${modalStatut && "open"}` }>
    <div className='quickBanner' style={bannerStyle}>
    <div className='quickContent'>
        <h3 className='quickTitle'>{movie?.title || movie.name || movie?.original_title}</h3>
        <p>
        {movie?.overview} 
        </p>
    </div>
    <button className="quickClose" onClick={modal}><CancelIcon /></button>

    </div>

    </div>  
  )
}

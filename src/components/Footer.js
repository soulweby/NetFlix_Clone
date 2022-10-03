import React from 'react'
import "./Footer.scss";
import  FacebookIcon  from '@material-ui/icons/Facebook';
import  InstagramIcon  from '@material-ui/icons/Instagram';
import  TwitterIcon  from '@material-ui/icons/Twitter';
import  YoutubeIcon  from '@material-ui/icons/YouTube';

export default function Footer() {
  return (
    <footer className='footer'>
        <div  className='container'>
            <div className='footerSocials'>
            <a href='/' className='footerSocial'>
            <FacebookIcon />
            </a>
           <a href='/' className='footerSocial'>
            <InstagramIcon />
            </a>
           <a href='/' className='footerSocial'>
            <TwitterIcon />
            </a>
           <a href='/' className='footerSocial'>
            <YoutubeIcon />
            </a>
            </div>
            <ul className='footerLinks'>
                <li className='footerLink'>
                    <a href='/'>
                        lien footer
                    </a>
                </li>
              <li className='footerLink'>
                    <a href='/'>
                        lien footer
                    </a>
                </li>
              <li className='footerLink'>
                    <a href='/'>
                        lien footer
                    </a>
                </li>
              <li className='footerLink'>
                    <a href='/'>
                        lien footer
                    </a>
                </li>
              <li className='footerLink'>
                    <a href='/'>
                        lien footer
                    </a>
                </li>
              <li className='footerLink'>
                    <a href='/'>
                        lien footer
                    </a>
                </li>
              <li className='footerLink'>
                    <a href='/'>
                        lien footer
                    </a>
                </li>
              <li className='footerLink'>
                    <a href='/'>
                        lien footer
                    </a>
                </li>
            </ul>
            <div className='footerCopy'>
                Netflix clone - tous droits réservés
            </div>
        </div>
    </footer>
  )
}

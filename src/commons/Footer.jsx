
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className='columns'>

                <div className='columnItem'>
                    <div class='marketplace_column'>
                        <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront-5@2x.svg' alt=''/>
                        <h1>NFT Marketplace</h1>
                    </div>
                    <h2>NFT marketplace UI created with Anima for Figma.</h2>
                    <h2>Join our community</h2>
                    <div className='social_media_logos'>
                        <a href='https://discord.com/' target='_blank' rel="noreferrer">
                            <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/discordlogo-2@2x.svg' alt='' />
                        </a>
                        <a href='https://www.youtube.com/' target='_blank' rel="noreferrer">
                            <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/youtubelogo-1@2x.svg' alt='' />
                        </a>
                        <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                            <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/twitterlogo-2@2x.svg' alt='' />
                        </a>
                        <a href='https://www.instagram.com/' target='_blank' rel="noreferrer" >
                            <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/instagramlogo-1@2x.svg'  alt=''/>
                        </a>
                    </div>
                </div>

                <div className='columnItem'>
                    <h1>Explore</h1>
                    <Link to='/marketplace'>Marketplace</Link>
                    <Link to='/rankings'>Rankings</Link>
                    <Link to='/connect-wallet'>Connect a wallet</Link>
                </div>

                <div className='columnItem'>
                    <h1>Join Our Weekly Digest</h1>
                    <h2>Get exclusive promotions & updates straight to your inbox.</h2>
                    <div className='mail-button'>
                        <input type='email' placeholder='Enter your email here' />
                        <button class='subscribe-button'>Subscribe</button>
                    </div>
                </div>

            </div>
            <hr />
            <p className='disclaimer'>Ⓒ NFT Market. Use this template freely.</p>
        </footer>
    );
}

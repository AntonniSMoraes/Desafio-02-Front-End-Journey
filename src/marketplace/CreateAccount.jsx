
import './ConnectWallet.css';
import firstImage from './../res/create_page.png';
import lockKey from './../res/LockKey.png';
import envelopeSimple from './../res/EnvelopeSimple.png';
import userPhoto from './../res/User.png';

export default function ConnectWallet(){
    return (
        <div id='connect-wallet-page'>
                <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-84@1x.png' alt='' />
                <div className='connect-wallet-container'>
                    <h1>Connect Wallet</h1>
                    <p>Choose a wallet you want to connect. There are several wallet providers.</p>
                    <div class='connect-wallet-links-container'>
                        <button className='connect-wallet-links'
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://metamask.io', '_blank', 'noreferrer');
                            }}
                        >
                            <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/metamask@2x.svg' alt='' />
                            <h3>Metamask </h3>
                        </button>

                        <button className='connect-wallet-links'
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://walletconnect.com', '_blank', 'noreferrer');
                            }}
                        >
                            <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/walletconnect@2x.svg' alt='' />
                            <h3>Wallet Connect</h3>
                        </button>

                        <button className='connect-wallet-links'
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://www.coinbase.com/', '_blank', 'noreferrer');
                            }}
                        >
                            <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/coinbase@2x.svg' alt='' />
                            <h3>Coinbase</h3>
                        </button>
                    </div>
                </div>
        </div>
    );
}

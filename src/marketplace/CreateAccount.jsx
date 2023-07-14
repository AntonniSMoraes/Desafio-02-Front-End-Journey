
import './CreateAccount.css';
import firstImage from './../res/create_page.png';
import lockKey from './../res/LockKey.png';
import envelopeSimple from './../res/EnvelopeSimple.png';
import userPhoto from './../res/User.png';

export default function CreateAccount(){
    return (
        <div id='create-account-page'>
                <img src={firstImage} alt='' />
                <div className='create-account-container'>
                    <h1>Create Account</h1>
                    <p>Welcome! Enter Your Details And Start Creating, Collecting And Selling Nfts.</p>
                    <form>
                        <div className='form-item'>
                            <img src={userPhoto} alt='' />
                            <input type='text' placeholder='Username' />
                        </div>
                        <div className='form-item'>
                            <img src={envelopeSimple} alt='' />
                            <input type='email' placeholder='Email address' />
                        </div>
                        <div className='form-item'>
                            <img src={lockKey} alt='' />
                            <input type='password' placeholder='Password' />
                        </div>
                        <div className='form-item'>
                            <img src={lockKey} alt='' />
                            <input type='password' placeholder='Confirm password' />
                        </div>
                    </form>
                    <button className='form-item-button'>Create account</button>
                </div>
        </div>
    );
}
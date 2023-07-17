import styles from './CardRanking.module.css'
import { useNavigate } from 'react-router';

export default function CardRanking(props) {
    const navigate = useNavigate();

    const handleArtistPage = () => {
        navigate('/artist-page');
    }

    return(
        <div className={styles.ranking_card} onClick={handleArtistPage}>

            <div className={styles.ranking_cardp1}>
                <p className={styles.ranking_number}>{props.number}</p>
                <div>
                    <img src={props.avatar} className={styles.ranking_avatar} alt='avatar'></img>
                    <h5 className={styles.ranking_artist}>{props.artist}</h5>
                </div>
            </div>

            <div className={styles.ranking_cardp2}>
                <p  id={styles.stats_change}>+{props.change}%</p>
                <p id={styles.stats_nfts}>{props.nfts}</p>
                <p className={styles.stats_volume}>{props.volume} ETH</p>
            </div>

        </div>
    );
}
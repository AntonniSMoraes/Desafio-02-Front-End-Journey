import styles from './Ranking.module.css'
import CardRanking from './CardRanking'
import HeaderRanking from './HeaderRanking'
import FilterRanking from './FilterRanking';

export default function Ranking(props) {
    return(
        <div className={styles.ranking_page}>
            <div id={styles.browser_ranking}>
                <h2 className={styles.h2_ranking_page}>Top Creators</h2>
                <p className={styles.p_ranking_page}>Check out top ranking NFT artists on the NFT Marketplace.</p>
            </div>
            <FilterRanking/>
            <div className={styles.ranking_content}>
                <HeaderRanking/>
                <div className={styles.table_ranking}>
                    { 
                        props.artists.map(artist => {
                            return(
                                <CardRanking number={artist.id} avatar={artist.photo} artist={artist.name} change={artist.change} nfts={artist.totalSales} volume={artist.volume}/>
                            );
                        })
                    }    
                </div> 
            </div>
        </div>
    );
}
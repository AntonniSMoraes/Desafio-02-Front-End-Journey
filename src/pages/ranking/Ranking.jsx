import styles from './Ranking.module.css'
import CardRanking from './CardRanking'
import HeaderRanking from './HeaderRanking'
import FilterRanking from './FilterRanking';

export default function Ranking(props) {

    const collectionData = [
        {
            id: '1',
            artist: 'Jaydon Ekstrom Bothman',
            avatar: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-5@2x.png',
            change: '1.41',
            nfts: '602',
            volume: '12.4'
        },{
            id: '2',
            artist: 'Talan Korsgaard',
            avatar: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-5@2x.png',
            change: '1.41',
            nfts: '602',
            volume: '12.4'
        },{
            id: '3',
            artist: 'Jaydon Ekstrom Bothman',
            avatar: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-5@2x.png',
            change: '1.41',
            nfts: '602',
            volume: '12.4'
        }
    ]

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
                        collectionData.map(element => {
                            return(
                                <CardRanking number={element.id} avatar={element.avatar} artist={element.artist} change={element.change} nfts={element.nfts} volume={element.volume}/>
                            );
                        })
                    }    
                </div> 
            </div>
        </div>
    );
}
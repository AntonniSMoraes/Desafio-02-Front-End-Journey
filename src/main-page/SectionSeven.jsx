import "./SectionSeven.css";

export default function SectionSeven() {
    return(
        <section className="pg-seven">
            <div className="pg-seven-title">
                    <h4 className="pg-seven-title-form">How It Works</h4>
                    <p className="pg-seven-txt-form">Find out hou to get started</p>
            </div>
            <div className="pg-seven-card-box">
                <div className="pg-seven-card">
                    <img className="pg-seven-img" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon@2x.svg"/>
                    <div className="pg-seven-card-txt">
                        <p className="pg-seven-card-txt-title">Setup Your wallet</p>
                        <p className="pg-seven-card-txt-txt">Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.</p>
                    </div>
                </div>
                <div className="pg-seven-card">
                    <img className="pg-seven-img" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon-1@2x.svg"/>
                    <div className="pg-seven-card-txt">
                        <p className="pg-seven-card-txt-title">Create Collection</p>
                        <p className="pg-seven-card-txt-txt">Upload your work and setup your collection. Add a description, social links and floor price.</p>
                    </div>
                </div>
                <div className="pg-seven-card">
                    <img className="pg-seven-img" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon-2@2x.svg"/>
                    <div className="pg-seven-card-txt">
                        <p className="pg-seven-card-txt-title">Start Earning</p>
                        <p className="pg-seven-card-txt-txt">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
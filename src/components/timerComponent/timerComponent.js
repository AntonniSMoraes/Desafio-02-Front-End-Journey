import styles from "./timerComponent.module.css";

function timerComponent() {
  return (
    <div className={styles.fundo}>
        <div className={styles.timer}>
            <p>Auction ends in:</p>
            <h1>59 : 59 : 59</h1>
            <h1>teste</h1>
        </div>   
    </div>
  );
}

export default timerComponent;

import styles from './StartGame.module.css';

const Hero = ({ toggle }) => {
    return (
        <>
            <main className={`${styles.hero_main}`}>
                <div className={`${styles.hero_img}`}>
                    <img src="./images/hero-dice.png" alt="Dice image" />
                </div>
                <div className={`${styles.hero_start}`}>
                    <h1>DICE ROLLER GAME</h1>
                    <button
                        onClick={toggle}>Play Now</button>
                </div>
            </main>

        </>
    )
}

export default Hero
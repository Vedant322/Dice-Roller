import styles from './RollDice.module.css';

const RollDice = ({ currentDice, rollDice}) => {
    return (
        <>
            <div
                className={`${styles.diceContainer}`}>
                <img onClick={rollDice} src={`./images/dice_${currentDice}.png`} alt="dice-one" />
                <p>Click on Dice to roll</p>
            </div>
        </>
    )
}

export default RollDice
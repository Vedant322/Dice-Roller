import styles from './NumberSelector.module.css'

const NumberSelector = ({ selectedNumber, setSelectedNumber, error, setError }) => {
    const arrNum = [1, 2, 3, 4, 5, 6];
    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError
    }

    return (
        <main>
            <p className={`${styles.error}`}>{error}</p>
            <div className={`${styles.numSelectorDiv}`}>
                <div className={`${styles.numSelector}`}>
                    {
                        arrNum.map((value, i) => (
                            <div
                                key={i}
                                onClick={() => numberSelectorHandler(value)}
                                className={`${styles.num_selector} ${value === selectedNumber ? styles.selected : ""}`}>
                                {value}
                            </div>
                        ))
                    }
                </div>
                <p>Select Number</p>
            </div>
        </main>
    )
}

export default NumberSelector
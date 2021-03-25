
import { useContext } from 'react';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/countdown.module.css';



export function Countdown(){
    
   const { minutes,
    isActive,
    hasFinished,
    seconds,
    resetCountdown,
    startCountdown } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    
    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                    <span>:</span>
                <div>    
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

                {hasFinished ? (
                    <button 
                    disabled
                    className={styles.countdownButton} 
                    >
                        Ciclo Encerrado
                       
                    </button>) : (
                        <>
                        { isActive ? (<button 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}>
                 Abandonar Ciclo
               
            </button>) : (<button 
            className={styles.countdownButton}
            onClick={startCountdown}>
                
                Iniciar ciclo
            </button>)

                } 
                        </>
                    )
                }

                
                
            
            

        </div>   
    );
}
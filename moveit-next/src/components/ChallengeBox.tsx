import { useContext } from 'react';
import styles from '../styles/components/challengeBox.module.css';
import {ChallengesContext } from '../context/ChallengesContext'
import { CountdownContext } from '../context/CountdownContext';



export function ChallengeBox(){

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);
    function handChallengeSucceed(){
        completeChallenge()
        resetCountdown()
        
    }

    function handChallengeFailed(){
        resetChallenge()
        resetCountdown()
    }


   
   
    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>
                        Ganhe {activeChallenge.amount}
                    </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                        type='button'
                        className={styles.challengeFailButton}
                         onClick= { handChallengeFailed }
                         >
                             Falhei
                        </button>


                        <button 
                        type='button'
                        className={styles.challengeSucceededButton}
                        onClick={handChallengeSucceed}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) :(
                <div className={styles.challengeNotActive}>
                <strong>
                    Finalize um ciclo para receber um desafio.
                </strong>

                <p>
                    <img src="icons/level-up.svg" alt="level up"/>
                    Avançe de level completando desafios
                </p>    
            </div>
            )}
        </div>
    )
}
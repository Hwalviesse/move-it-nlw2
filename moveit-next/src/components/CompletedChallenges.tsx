import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/desafiosChallenges.module.css'

export function CompletedChallenges(){
   
    const {challengesCompleted} = useContext(ChallengesContext);
   
    return (
        <div className={styles.completedChallenges}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}
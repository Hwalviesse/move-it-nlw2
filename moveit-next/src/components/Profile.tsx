import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/profile.module.css';


export function Profile(){
    const {level} = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src='https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/46918736_105262050502098_4124829528142905344_o.jpg?_nc_cat=104&ccb=3&_nc_sid=0debeb&_nc_eui2=AeGJJDVcDafI0Ouixdq-5kSHo8de1GA6iROjx17UYDqJE2exxYkFNjEtpCryw__lovH_1gr_vi65Kkm8cL7mzaRX&_nc_ohc=lXTkGR3HIWQAX_C31wA&_nc_ht=scontent-gig2-1.xx&oh=e77642655df566a4e0fa21f9eec759b5&oe=60615A0D' alt='Hemerson Walviesse' />
            <div>
                <strong>Hemerson Walviesse</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>

        </div>
    );
}
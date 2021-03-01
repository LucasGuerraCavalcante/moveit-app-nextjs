import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext); 
    
    function handleChallengeSucceded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {
                activeChallenge ? (
                    <div className={styles.challengeActive}>
                        <header>{activeChallenge.amount} XP</header>

                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} />
                            <strong>New Challenge</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button
                                type="button"
                                className={styles.challengeFailedButton}
                                onClick={handleChallengeFailed}
                            >
                                Challenge Failed
                            </button>
                            <button
                                type="button"
                                className={styles.challengeDoneButton}
                                onClick={handleChallengeSucceded}
                            >
                                Challenge Done
                            </button>
                        </footer>
                    </div>
                ) 
                : (
                    <div className={styles.challengeNotActive}>
                        <strong>
                            When the countdown ends, you'll receive a new challenge.
                        </strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                            Level up by completing challenges.
                        </p>
                    </div>
                )
            }
        </div>
    )
}

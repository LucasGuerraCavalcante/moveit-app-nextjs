import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

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
                                onClick={resetChallenge}
                            >
                                Challenge Failed
                            </button>
                            <button
                                type="button"
                                className={styles.challengeDoneButton}
                                onClick={() => {}}
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

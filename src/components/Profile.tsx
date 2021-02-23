import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/LucasGuerraCavalcante.png" alt="Profile Image" />
            <div>            
                <strong>Lucas Guerra</strong>
                <p>
                    <img src="icons/level.svg" alt="Level Icon" />
                    Level 1
                </p>
            </div>
        </div>
    )
}
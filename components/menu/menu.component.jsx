import Link from 'next/link'

import styles from './menu.module.scss'

const Header = () => (
    <header className={styles.HeaderContainer}>
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170228462-1"></script> */}
                <Link href="/anmeldelser" as="{`/anmeldelser`}">
                    <h3 className={styles.Anmeldelser}>
                        Anmeldelser
                    </h3>
                </Link>
                <div className={styles.dropdown}>
                    
                    <Link href="/oppskrifter" as="{`/oppskrifter`}">
                        <h3 className={styles.MenuItemContainer}>
                            Oppskrifter &#x21A1;
                        </h3>
                    </Link>
                    <div className={styles.dropdownContent}>
                        <p className={styles.dropDownItems}>
                            Forretter
                        </p>
                        <p className={styles.dropDownItems}>
                            Middag
                        </p>
                        {/* <p className={styles.dropDownItems}>
                            Eksklusive Retter
                        </p> */}
                        <p className={styles.dropDownItems}>
                            Tapas
                        </p>
                        <p className={styles.dropDownItems}>
                            Grillmat
                        </p>
                        <p className={styles.dropDownItems}>
                            Kaker
                        </p>
                        <p className={styles.dropDownItems}>
                            Gjeste Middager
                        </p>
                        <Link href="/signatur" as="{`/signatur`}">
                            <p>
                                Signatur Retter
                            </p>
                        </Link>
                    </div>
                </div>
                
           
            {/* LOGO */}
            <Link href="/" as={`/`}>
                <h1 className={styles.H1Container}>Yum Tash MatBlogg</h1>
            </Link>
            <Link href="/reise" as={`/reise`}>
                <h3 className={styles.ReiseContainer}>
                    Reise
                </h3>
            </Link>
            <Link href="/signatur" as="{`/signatur`}">
                <h3 className={styles.SignaturRetter}>
                    Signatur Retter
                </h3>
            </Link>
            
    </header>
);

export default Header
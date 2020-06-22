import Link from 'next/link'

import styles from './menu.module.scss'

const Header = () => (
    <header className={styles.HeaderContainer}>
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170228462-1"></script> */}
            
            
                <div className={styles.dropdown}>
                    <Link href="/oppskrifter" as="{`/oppskrifter`}">
                        <h3 className={styles.MenuItemContainer}>
                            Oppskrifter &#x21A1;
                        </h3>
                    </Link>
                    <div className={styles.dropdownContent}>
                        <Link href="/signatur" as="{`/signatur`}">
                            <p>
                                Signatur Retter
                            </p>
                        </Link>
                        <p>
                            Middag
                        </p>
                        <p>
                            Gjeste Middager
                        </p>
                        <p>
                            Drikke
                        </p>
                    </div>
                </div>
                
           
            {/* LOGO */}
            <Link href="/" as={`/`}>
                <h1 className={styles.H1Container}>Yum Tash MatBlogg</h1>
            </Link>
            <Link href="/signatur" as="{`/signatur`}">
                <h3 className={styles.SignaturRetter}>
                    Signatur Retter
                </h3>
            </Link>
            
    </header>
);

export default Header
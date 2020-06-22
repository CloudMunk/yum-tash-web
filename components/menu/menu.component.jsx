import Link from 'next/link'

import styles from './menu.module.scss'

const Header = () => (
    <header className={styles.HeaderContainer}>
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170228462-1"></script> */}
            
            <Link href="/oppskrifter" as="{`/oppskrifter`}">
                <h3 className={styles.MenuItemContainer}>
                    Oppskrifter
                </h3>
            </Link>
            {/* LOGO */}
            <Link href="/" as={`/`}>
                <h1 className={styles.H1Container}>Yum Tash</h1>
            </Link>
            <Link href="/signatur" as="{`/signatur`}">
                <h3 className={styles.SignaturRetter}>
                    Signatur Retter
                </h3>
            </Link>
            
    </header>
);

export default Header
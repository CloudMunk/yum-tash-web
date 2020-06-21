import Link from 'next/link'

// From my custom styled components
// import { H1Container } from '../styled-components/h1.header.styles'

// Local styles for component.
import styles from './layouts.module.scss'




const DefaultLayout = ({ children }) => (
    <div>
        <header className={styles.HeaderContainer}>
                {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170228462-1"></script> */}
                
                    <Link href="/oppskrifter" as="{`/oppskrifter`}">
                        <h3 className={styles.MenuItemContainer}>
                            Oppskrifter
                        </h3>
                    </Link>
                
                <Link href="/" as={`/`}>
                    <h1 className={styles.H1Container}>Yum Tash</h1>
                </Link>
                
        </header>
      <main>{children}</main>
    </div>
  );
  
  export default DefaultLayout;
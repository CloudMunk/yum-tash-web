import Link from 'next/link'

// From my custom styled components
import { H1Container } from '../styled-components/h1.header.styles'

// Local styles for component.
import { HeaderContainer, MenuItemContainer } from './layouts.styles'




const DefaultLayout = ({ children }) => (
    <div>
        <HeaderContainer>
                {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170228462-1"></script> */}
                
                    <Link href="/oppskrifter" as="{`/oppskrifter`}">
                    <MenuItemContainer>
                        Oppskrifter
                    </MenuItemContainer>
                    </Link>
                
                <Link href="/" as={`/`}>
                    <H1Container>Yum Tash</H1Container>
                </Link>
                
        </HeaderContainer>
      <main>{children}</main>
    </div>
  );
  
  export default DefaultLayout;
import { HeaderContainer } from './layouts.styles'

// From my custom styled components
import { H1Container } from '../styled-components/h1.header.styles'


const DefaultLayout = ({ children }) => (
    <div>
        <HeaderContainer>
            
            
                {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170228462-1"></script> */}

                <H1Container>Yum Tash</H1Container>
            
        </HeaderContainer>
      <main>{children}</main>
    </div>
  );
  
  export default DefaultLayout;
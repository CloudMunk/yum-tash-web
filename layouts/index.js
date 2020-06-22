

// From my custom styled components
// import { H1Container } from '../styled-components/h1.header.styles'
import Header from '../components/menu/menu.component'





const DefaultLayout = ({ children }) => (
    <div>
        <Header />
        <main>{children}</main>
    </div>
  );
  
  export default DefaultLayout;
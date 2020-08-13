import Header from '../components/menu/menu.component'
import Footer from '../components/footer/footer.component'

import styles from './layouts.module.scss'

const DefaultLayout = ({ children }) => (
    <div>
        <Header />
        <main>{children}</main>
    </div>
  );
  
  export default DefaultLayout;
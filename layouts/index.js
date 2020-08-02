import Header from '../components/menu/menu.component'
import Footer from '../components/footer/footer.component'

import styles from './layouts.module.scss'

const DefaultLayout = ({ children }) => (
    <div>
        {/* <div style={{
            width: '100%',
            height: '25px',
            backgroundImage: 'url(https://i.imgur.com/fF3cAue.png)',
            backgroundSize: '30px 15px',
            backgroundRepeat: 'repeat-x',
            backgroundPositionY: '0px'
        }}></div> */}
        <Header />
        <main>{children}</main>
    </div>
  );
  
  export default DefaultLayout;
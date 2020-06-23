import Header from '../components/menu/menu.component'

const DefaultLayout = ({ children }) => (
    <div>
        <Header />
        <main>{children}</main>
    </div>
  );
  
  export default DefaultLayout;
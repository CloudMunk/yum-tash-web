import Header from '../../components/menu/menu.component'
import Footer from '../../components/footer/footer.component'

const Anmeldelser = (props) => {
    const { posts = [] } = props
    return (
        <div>
            <Header />
            <h1>Anmeldelser</h1>
            <Footer />
        </div>
    )

}

export default Anmeldelser
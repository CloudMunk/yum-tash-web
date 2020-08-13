import Header from '../../components/menu/menu.component'
import Footer from '../../components/footer/footer.component'

const Anmeldelser = (props) => {
    const { posts = [] } = props
    return (
        <div>
            <Header />
                <div>
                    <h1>Anmeldelser</h1>
                </div>
            <Footer />
        </div>
    )

}

export default Anmeldelser
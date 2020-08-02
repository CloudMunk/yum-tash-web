import Header from '../components/menu/menu.component'

const Anmeldelser = (props) => {
    const { posts = [] } = props
    return (
        <div>
            <Header />
            <h1>Anmeldelser</h1>
        </div>
    )

}

export default Anmeldelser
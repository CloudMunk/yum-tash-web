import Header from '../components/menu/menu.component'

const Oppskrifter = (props) => {
    const { posts = [] } = props
    return (
        <div>
            <Header />
            <h1>Oppskrifter</h1>
        </div>
    )
}

export default Oppskrifter
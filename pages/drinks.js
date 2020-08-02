import Header from '../components/menu/menu.component'

const Drinks = (props) => {
    const { posts = [] } = props
    return (
        <div>
            <Header />
            <h1>Drinks</h1>
        </div>
    )
}

export default Drinks
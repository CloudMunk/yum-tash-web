import Header from '../components/menu/menu.component'

const Reise = (props) => {
    const { posts = [] } = props
    return (
        <div>
            <Header />
            <h1>Reise</h1>
        </div>
    )

}

export default Reise
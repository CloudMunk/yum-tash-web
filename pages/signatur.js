import Header from '../components/menu/menu.component'

const Signatur = (props) => {
    const { posts = [] } = props
    return (
        <div>
            <Header />
            <h1>Signatur Retter</h1>
        </div>
    )

}

export default Signatur
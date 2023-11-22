import "./ItemListContainer.css"


const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1 className="tituloPrincipal">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer
function ProductCard (props) {
    return (
        <div>
            {props.nom} - 
            {props.prix} - 
            {props.stoque ? "Disponible" : "Rupture de stock"}
        </div>
    )
}
export default ProductCard;
function ProductCard(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.price} DH</td>
            <td>{props.stock ? 'Disponible' : 'Indisponible'}</td>
        </tr>
    );
}

export default ProductCard;
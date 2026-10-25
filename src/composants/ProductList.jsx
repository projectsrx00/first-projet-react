import ProductCard from "./ProductCard";

function ProductList (props) {
    return (
        <div>
            <ul>
                {props.liste.map((e)=> 
                <li key={e.id}>
                    <ProductCard nom={e.name} prix={e.price} stock={e.stock}/>
                </li>)}
            </ul>
        </div>
    )
}
export default ProductList;
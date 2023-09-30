import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const params = useParams();

    return (
        <div>
            Detail produk dengan id: {params?.id}
        </div>
    )
}

export default ProductDetail
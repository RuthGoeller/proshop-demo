import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'



function Homescreen() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }
        fetchProducts()
    }, [])




  return (
   <>
   <h1>Latest Products</h1>
    <Row>
        {products.map(product => (
            <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))}
    </Row>
    
   </>
  )
}

export default Homescreen
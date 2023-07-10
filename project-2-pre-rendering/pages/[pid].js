import fs from 'fs';
import path from 'path';

function ProductDetailPage(props) {

    const { loadedProduct } = props


    return (
        <>
            <h1></h1>
        </>
    )
}

export async function getStaticProps(context) {

    const { params } = context

    const productId = params.pid


    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.promises.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    const product = data.products.find(product => product.id === productId)


    return {
        props: {
            loadedProduct: product
        }
    }

}

export default ProductDetailPage
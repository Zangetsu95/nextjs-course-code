import fs from 'fs';
import Link from 'next/link';
import path from 'path';

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map(product => <li key={product.id}><Link href={`/products/${product.id}`}>{product.title}</Link></li>)}
    </ul>
  );
}

export async function getStaticProps() {
  console.log('(Re-)Generationg...')
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.promises.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products
    },
    revalidate: 10
  };
}

export default HomePage;

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Livro numero um ',
    description: 'Caderno de notas',
  },
  {
    id: 'p2',
    price: 5,
    title: 'O pequeno principe',
    description: 'O primeiro livro que li',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Compre seus produtos favoritos</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
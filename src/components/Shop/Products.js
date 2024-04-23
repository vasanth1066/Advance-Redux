import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const dummy = [
    {
      id: "1",
      title: "first product",
      description: "This is a first product - amazing!",
      price: 6,
    },
    {
      id: "2",
      title: "second product",
      description: "This is a second product - amazing!",
      price: 10,
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy.map((items) => (
          <ProductItem
            key={items.id}
            id={items.id}
            title={items.title}
            price={items.price}
            description={items.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

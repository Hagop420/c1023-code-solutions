import { useEffect, useState } from 'react';
import { fetchProduct, type Product, toDollars } from '../lib';
import './ProductDetails.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

export function ProductDetails() {
  // TODO: Retrieve productId from the route
  const { productId } = useParams();
  // const productId = undefined;
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const product = await fetchProduct(productId);
        setProduct(product);
      } catch (err) {
        setError(err);
        navigate('/not-found');
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadProduct(+productId);
    }
  }, [productId, navigate]);

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error Loading Product {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  function handleClick() {
    alert(`Thanks for buying ${product?.name} `);
    navigate('/');
  }
  if (!product) return null;
  const { name, imageUrl, price, shortDescription, longDescription } = product;
  return (
    <div className="container">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            <div className="col">
              {/* TODO: Instead of a div, the above should link to `/` */}
              <Link to="/">&lt; Back to catalog</Link>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-sm-6 col-md-5">
              <img src={imageUrl} alt={name} className="image" />
            </div>
            <div className="col-12 col-sm-6 col-md-7">
              <h2>{name}</h2>
              <h5 className="text-secondary">{toDollars(price)}</h5>
              <p>{shortDescription}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="long-description">{longDescription}</p>
            </div>
          </div>
          <button onClick={handleClick}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

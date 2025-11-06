import './HomePage.css';
import { Header } from '../../components/Header';
import { Product } from './Product';
import { products } from '../../../data/products';

export function HomePage(){
	return (
		<>
			<Header />

			<div className="products-grid home-page">

				{products.map((p) => (
					<Product productImg={p.image}
						title={p.name}
						ratingImg={`images/ratings/rating-${p.rating.stars * 10}.png`}
						reviews={p.rating.count} price={p.priceCents / 100}
					/>
				))}
			
			</div>
		</>
	);
}
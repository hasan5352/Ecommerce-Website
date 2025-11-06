import './HomePage.css';
import { Product } from './Product';

export function HomePage({ Header, products }){
	return (
		<>
			{Header}

			<div className="products-grid home-page">

				{products.map((p) => (
					<Product productImg={p.image}
						title={p.name}
						ratingImg={`images/ratings/rating-${p.rating.stars * 10}.png`}
						reviews={p.rating.count} price={p.priceCents / 100} key={p.id}
					/>
				))}
			
			</div>
		</>
	);
}
import { it, describe, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { CartContext } from '../../context/CartProvider';
import { PaymentContext } from '../../context/PaymentProvider'

describe('Product Component', ()=>{
	const product = {
			id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
			image: "images/products/athletic-cotton-socks-6-pairs.jpg",
			name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
			rating: {
			stars: 4.5,
			count: 87
			},
			priceCents: 1090,
			keywords: ["socks", "sports", "apparel"]
	};
	const mockAdd = vi.fn().mockResolvedValue({});
	const mockLoad = vi.fn();
	const mockFetchSummary = vi.fn();

	it('displays product details', ()=>{
		render(
			<CartContext.Provider value={{ addProductToCartInBackend: mockAdd, loadCart: mockLoad }}>
				<PaymentContext.Provider value={{ fetchPaymentSummary: mockFetchSummary }}>
					<Product product={product}/>
				</PaymentContext.Provider>
			</CartContext.Provider>
		);
		expect(screen.getByText(product.name)).toBeInTheDocument();
		expect(screen.getByText("$" + product.priceCents/100)).toBeInTheDocument();
		expect(screen.getByText(product.rating.count)).toBeInTheDocument();
		expect(screen.getByTestId("product-image")).toHaveAttribute('src', product.image);
		expect(screen.getByTestId("ratings-image")).toHaveAttribute('src', `/images/ratings/rating-${product.rating.stars * 10}.png`);
	});
})
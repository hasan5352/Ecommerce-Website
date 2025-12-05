import { Product } from "../models/Product.js";
import { sequelize } from '../models/index.js';
import { faker } from '@faker-js/faker';

const randomInt = (min, max) => faker.number.int({ min, max });
const randomImgUrl = (height, width) => faker.image.urlLoremFlickr({ width, height, category: 'electronics' })

function randomKeywords() {
  const categories = [
    "electronics", "home", "kitchen", "clothing", "beauty", "sports",
    "gaming", "outdoor", "office", "tools", "fitness", "pets"
  ];
  const materials = ["cotton", "leather", "plastic", "steel", "wood", "rubber", "nylon"];
  const colors = ["red", "blue", "black", "white", "green", "yellow", "gray"];
  const actions = ["sale", "new", "trending", "popular", "lightweight", "durable"];

  // randomly pick some
  const pick = (arr, n) =>
    [...Array(n)]
      .map(() => arr[Math.floor(Math.random() * arr.length)]);

  return [
    ...pick(categories, 2),        // 1 category
    ...pick(materials, 1),         // 1 material
    ...pick(colors, 1),            // 1 color
    ...pick(actions, 1)            // 1 tag
  ];
}

function generateProduct() {
  const stars = [4.5, 5, 4, 3.5, 3, 2.5, 2, 1.5, 1];
  return  {
    image: randomImgUrl(600, 600),
    name: faker.commerce.productName(),
    priceCents: randomInt(620, 20000),
    keywords: randomKeywords(),
    rating: { 
      stars: stars[randomInt(0, stars.length-1)],
      count: randomInt(10, 1000) 
    },
    id: faker.string.uuid(),
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
  }
}

async function addProductsToDb(count) {
  try{
    const products = Array.from({ length: count }, generateProduct);
    await Product.bulkCreate(products);
    console.log('Products Saved')
  } catch (err) {
    console.log(err)
    console.log("Products not saved. Failed!")
  }
}

await sequelize.sync();
addProductsToDb(5000);
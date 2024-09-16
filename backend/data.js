import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Solen',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '2',
      name: 'Adidas Slim Shirt',
      slug: 'adidas-slim-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 100,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.1,
      numReviews: 15,
      description: 'pretty shirt',
    },
    {
      //_id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 150,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.8,
      numReviews: 20,
      description: 'high quality pants',
    },
    {
      //_id: '4',
      name: 'Adidas Slim Pant',
      slug: 'adidas-slim-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 90,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.6,
      numReviews: 25,
      description: 'pretty pants',
    },
  ],
};

export default data;

# [Amazona](https://amazona-ih67.onrender.com)

## Description

This is a replicate of amazon using MERN stack.

## User Stories

- **Home:** As an anon/user, I can see the list of products that I can buy.
- **Cart:** As an anon/user, I can see the details of one specific product on its own page.
- **Cart:** As an anon/user, I can see the products I have put aside on the cart before placing my order.
- **Signup:** As an anon I can sign up to the platform so that I can place an order.
- **Login:** As a user I can login to the platform so that I can place an order and see my profile.
- **Logout:** As a user I can logout from the platform so no one else can use it.
- **Edit Profile:** As a user, I can edit my personal information.
- **Shipping Address:** As a user, I can enter the details of my shipping address.
- **Payment:** As a user, I can decide whether I want to pay via paypal or Stripe.
- **Preview Order:** As a user, I can see a recap of my order before proceeding to payment.
- **Order History:** As a user, I can see a recap of all my past orders and their status.




# Client / Frontend

## React Router Routes (React App)

| Path                    | Component                           | Permissions             | Behavior                                                              |
| ----------------------- | ----------------------------------- | ----------------------- | -----------------------------------------------------------           |
| `/`                     | HomeScreen,Product, Rating          | public `<Route>`        | Home page                                                             |
| `/product/:slug`        | ProductScreen, Product, Rating      | public `<Route>`        | Show full details concerning one product                              |
| `/cart`                 | CartScreen                          | public `<Route>`        | Add, delete products, proceed to checkout                             |
| `/signup`               | SignupScreen                        | anon only               | Signup form, link to login, navigate to home                          |
| `/signin`               | SigninScreen                        | anon only               | Signin form, link to signup, navigate to home or shipping address     |
| `/profile`              | ProfileScreen                       | user only `<isAuth>`    | Profile details form to edit personal info                            |
| `/shipping`             | ShippingAddressScreen, CheckoutSteps| user only `<isAuth>`    | Show user shipping detail and edit form page                          |
| `/payment`              | PaymentScreen, CheckoutSteps        | user only `<isAuth>`    | Radio button for type of payment                                      |
| `/placeorder`           | PlaceOrderScreen, CheckoutSteps     | user only `<isAuth>`    | Recap of order details                                                |
| `/order/:id`            | OrderScreen                         | user only `<isAuth>`    | Recap of order details + status                                       |
| `/orderhistory`         | OrderHistoryScreen                  | user only `<isAuth>`    | Recap of previous orders                                              |


## Pages

- Home Page
- Product Page
- Cart
- Sign in Page
- Log in Page
- User Profile Page
- Order History Page
- Shipping Address Page
- Payment Page
- Place Order Page
- Order Detail Page
- Previous Orders History Page

## Components

- Checkout Steps
- Loading Box
- Message Box
- Product
- Rating


# Server / Backend

## Models

Order model

```javascript
  {
    orderItems: [
      {
        slug: { type: String, required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
      },
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
```

Product model

```javascript
{
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
```

User model

```javascript
{
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
```

## API Endpoints (backend routes)

| HTTP Method | URL                              | Request Body               | Success status | Error Status | Description                                                   |
| ----------- | -------------------------------- | -------------------------- | -------------- | ------------ | ------------------------------------------------------------- |
| USE         | `/api/seed`                      |                            |                |              | Mount seedRouter as a middleware                              |
| USE         | `/api/products`                  |                            |                |              | Mount productRouter as a middleware                           |
| USE         | `/api/users`                     |                            |                |              | Mount userRouter as a middleware                              |
| USE         | `/api/orders`                    |                            |                |              | Mount orderRouter as a middle                                 |
| seedRouter.GET | `/`                              |                            |                |              | Seed database for Product Model and User Model                |
| productRouter.GET         | `/`                              |                            | 200            | 404          | Home page listing all products                                |
| productRouter.GET         | `/slug/:slug`                    | { slug }                   | 200            | 404          | Detail page of one product                                    |
| productRouter.GET         | `/:id`                           | { id }                     | 200            | 404          | Detail page of one product                                    |
| userRouter.POST        | `/signin`                        | { email, password }        | 200            | 401          | Check if user exist, password matches then store user in session |
| userRouter.POST        | `/signup`                        |  { name, email, password } | 200            | 404          | Check if user does not exist already, then create user with encrypted password, and store user in session  |
| userRouter.PUT         | `/profile`                       | { id }                     | 200            | 404          | Updates user information                                        |
| orderRouter.POST        | `/`                              | { req.body }               | 201            | 404          | Create new order linked to the user                                                                               |
| orderRouter.GET         | `/mine`                          | { id }                     | 200            | 404          | Detail page of one order                                                                                          |
| orderRouter.GET         | `/:id`                           | { id }                     | 200            | 404          | Detail page of one order                                                                                          |
| orderRouter.PUT         | `/:id/pay`                       | { id }                     | 200            | 404          | Updates payment status of order                                                                                              |

## Links

[Monorepository Link](https://github.com/solenwa/Amazona)

[Deploy Link](https://amazona-ih67.onrender.com)


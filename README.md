# Shopping React App
## [Live Demo](https://shopping-react0.netlify.app/)
![App Screenshot](/public/image%20copy.png)
## Description

This is an shopping application built with React, Redux, and Material-UI. The app allows users to browse products, filter them by categories, add them to the cart, and manage the cart items.

## Features

- Browse a list of products with details (price, image, title)
- Filter products by category
- Add items to the cart
- Update the quantity of items in the cart
- Remove items from the cart
- Calculate the total price of items in the cart
- Responsive design using Material-UI

## Technologies Used

- React.js
- Redux
- Redux Toolkit
- React Router
- Material-UI

## Installation

1. Clone the repository:
   ```git clone https://github.com/yourusername/ecommerce-react-app.git```
2. Navigate to the project directory:
```cd ecommerce-react-app```

3. Install dependencies:
```npm install```
4. Start the application:
```npm start```
-  The project will run on http://localhost:5173!
## Project Skeleton
## Authors

- [@recep-demir](https://github.com/recep-demir)


```

├── public
│     └── index.html
├── src
│   ├── App.js
│   ├── assets
│   │   └── cw.svg
│   ├── components
│   │   ├── BasketCard.jsx
│   │   ├── CategoryBar.jsx
│   │   ├── EmptyBasketTotal.jsx
│   │   ├── FiiledBasketTotal.jsx
│   │   ├── NavBar.jsx
│   │   └── ProductCard.jsx
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Basket.jsx
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── redux
│   │   ├── action
│   │   │   └── basketAction.js
│   │   ├── index.jsx
│   │   ├── reducer
│   │   │   └── basketReducer.js
│   │   └── type
│   │   │   └── basketType.js
│   └── router
│       └── AppRouter.jsx
├── package.json
└── yarn.lock
```

## Contributing
1. Fork the repository.
2. Create a new branch (```git checkout -b feature-name```).
3. Commit your changes (```git commit -am 'Add feature```).
4. Push to the branch (```git push origin feature-name```).
5. Create a new Pull Request.

## License
This project is open-source and available under the MIT License.
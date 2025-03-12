# Vijay Mobile Shop and Accessories

## Overview

[Vijay Mobile Shop](https://vijay-mobile-shop.vercel.app) is an e-commerce platform designed to provide a seamless online shopping experience for mobile phones, mobile accessories, and related products. The platform offers a wide range of trending mobile covers, high-quality tempered glasses, and other essential mobile accessories.

## Features

- 🛒 **E-Commerce Platform**: Browse and purchase mobile accessories with ease.
- 🔍 **Product Search & Filtering**: Quickly find the right accessories.
- 🖼 **High-Quality Product Display**: Showcases images and descriptions.
- 💳 **Secure Checkout**: Seamless and secure payment integration.
- 📦 **Order Management**: Track and manage orders efficiently.

## Tech Stack

- **Frontend**: React.js (with Vite) + Tailwind CSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (NoSQL)
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Vercel (Frontend) & Render (Backend)

## Installation & Setup

### Prerequisites

- Node.js & npm installed
- MongoDB (local or cloud-based)

### Steps to Run Locally

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/vijay-mobile-shop.git
   cd vijay-mobile-shop
   ```
2. **Install Dependencies**
   ```sh
   npm install
   cd client && npm install
   ```
3. **Set Up Environment Variables** Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   STRIPE_PUBLIC_KEY=your_stripe_public_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```
4. **Run Backend**
   ```sh
   npm run dev
   ```
5. **Run Frontend**
   ```sh
   cd client
   npm run dev
   ```
6. **Open in Browser** Visit `http://localhost:5173`

## Deployment

- **Frontend:** Hosted on [Vercel](https://vercel.com)
- **Backend:** Hosted on Railway

## Contributing

Feel free to contribute by submitting issues or pull requests.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, contact **Vijay Mobile Shop Team**.


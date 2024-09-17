# Artix
Artix is an art e-commerce platform designed to offer a wide range of art products including paintings, sculptures, and other artworks. The platform also provides users the ability to purchase tickets for art exhibitions.

## My Contributions:
- Implemented Redux throughout the entire app for seamless state management.
- Developed multiple core pages with responsive, mobile-friendly designs using Tailwind CSS and Material Tailwind, ensuring a great user experience across all screen sizes.
- Integrated Redux Thunks to handle asynchronous operations, such as API calls to the backend for CRUD functionality (Create, Read, Update, Delete).
- Created and managed Redux Slices to handle user authentication, product inventory, and cart functionality.

## Frontend Overview:
- Created with React.js, providing a dynamic and interactive user interface.
- Used Redux Toolkit and React Redux for managing state across the app, ensuring a predictable state container.
- Integrated React Hook Form with Yup for efficient form handling and validation.
- Utilized Axios for making API calls, enabling smooth communication between the frontend and backend.
- Styled using Tailwind CSS and Material Tailwind, achieving responsive designs across all screens and ensuring a consistent and visually appealing user experience.

## Backend Overview:
- Built the backend using Node.js and Express.js, ensuring a scalable and efficient API.
- Utilized MongoDB to manage data related to users, art products, orders, and ticket bookings.
- Developed several RESTful API endpoints to handle various operations, including product fetching, user authentication, and order/ticket management.
- Integrated JWT-based authentication to secure login processes and protect sensitive routes within the application.

## Vite Plugins:
To optimize the performance of the React app, we used the following official Vite plugins:

@vitejs/plugin-react for Babel-based Fast Refresh, ensuring quick development cycles.
@vitejs/plugin-react-swc as an alternative for SWC-based Fast Refresh, providing an even faster development experience.

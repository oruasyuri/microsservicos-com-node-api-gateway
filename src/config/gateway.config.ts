export const serviceConfig = {
  users: {
    url: process.env.USERS_SERVICE_URL || 'http://localhost:3000',
    timeout: 1000 * 10, // Timeout in milliseconds (10 seconds)
  },
  products: {
    url: process.env.PRODUCTS_SERVICE_URL || 'http://localhost:3001',
    timeout: 1000 * 10, // Timeout in milliseconds (10 seconds)
  },
  checkouts: {
    url: process.env.CHECKOUT_SERVICE_URL || 'http://localhost:3002',
    timeout: 1000 * 10, // Timeout in milliseconds (10 seconds)
  },
  payments: {
    url: process.env.PAYMENTS_SERVICE_URL || 'http://localhost:3003',
    timeout: 1000 * 10, // Timeout in milliseconds (10 seconds)
  },
} as const;

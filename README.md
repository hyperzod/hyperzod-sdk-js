# Hyperzod JavaScript SDK

Official JavaScript SDK for Hyperzod API.

## Installation

```bash
npm install @hyperzod/hyperzod-sdk
```

## Quick Start

### Basic Setup

```javascript
import createHyperzodSDK from '@hyperzod/hyperzod-sdk';

// Create SDK instance
const sdk = createHyperzodSDK({
  env: 'dev', // or 'production'
  apiVariant: 'default', // or 'secondary'
  tenant: 'your-tenant.com', // optional, auto-detected from window.location.hostname in browser
  timeout: 30000, // optional, default 30 seconds
  uploadTimeout: 60000, // optional, default 60 seconds for uploads
});

// Use the SDK
const products = await sdk.catalog.listProducts();
```

### Singleton Pattern (Recommended)

To ensure you're using the same SDK instance across your application, create it once and import it everywhere:

```javascript
// sdk.js
import createHyperzodSDK from '@hyperzod/hyperzod-sdk';

// Create a singleton instance
const sdk = createHyperzodSDK({
  env: process.env.NODE_ENV === 'production' ? 'production' : 'dev',
  apiVariant: 'default',
});

export default sdk;
```

Then import it anywhere:

```javascript
// Component1.jsx
import sdk from './sdk';
await sdk.auth.login({ email, password });

// Component2.jsx
import sdk from './sdk'; // Same instance, shared auth token
await sdk.cart.getCart();
```

## Configuration Options

```javascript
const sdk = createHyperzodSDK({
  env: 'dev' | 'production',           // Environment (default: 'dev')
  apiVariant: 'default' | 'secondary', // API variant (default: 'default')
  tenant: 'string',                    // Tenant domain (auto-detected in browser)
  timeout: 30000,                      // Request timeout in ms (default: 30000)
  uploadTimeout: 60000,                // Upload timeout in ms (default: 60000)
  customHeaders: {},                   // Custom headers for regular requests
  uploadCustomHeaders: {},             // Custom headers for upload requests
});
```

## Usage Examples

### Authentication

```javascript
// Login
try {
  const response = await sdk.auth.login({
    email: 'user@example.com',
    password: 'password123'
  });
  
  // Set auth token for subsequent requests
  sdk.setAuthToken(response.token);
  
  // Store token in localStorage
  localStorage.setItem('authToken', response.token);
} catch (error) {
  console.error('Login failed:', error);
}

// Signup
const signupResponse = await sdk.auth.signup({
  email: 'user@example.com',
  password: 'password123',
  name: 'John Doe'
});

// Get logged in user
const user = await sdk.auth.getLoggedInUser();

// Logout
await sdk.auth.logout({});
sdk.setAuthToken(null);
```

### Catalog & Products

```javascript
// List products
const products = await sdk.catalog.listProducts({ page: 1, limit: 20 });

// Get product by ID
const product = await sdk.catalog.getProduct({ product_id: '123' });

// Search products
const searchResults = await sdk.catalog.searchProduct({ q: 'pizza' });

// Get product categories
const categories = await sdk.catalog.listProductCategories();
```

## Error Handling

All SDK methods return promises that can throw `SDKError` objects:

```javascript
try {
  const response = await sdk.auth.login({ email, password });
} catch (error) {
  if (error.name === 'SDKError') {
    console.error('Error Code:', error.code);
    console.error('HTTP Status:', error.status);
    console.error('Message:', error.message);
    console.error('Request ID:', error.requestId);
    
    // Handle specific errors
    if (error.status === 401) {
      // Unauthorized - clear token, redirect to login
      sdk.setAuthToken(null);
    } else if (error.status === 400 || error.status === 422) {
      // Validation error
      console.error('Validation failed:', error.raw?.response?.data?.errors);
    } else if (!error.status) {
      // Network error
      console.error('Network error:', error.message);
    }
  }
}
```

### Common Error Types

- **HTTP Response Errors**: `error.status` contains HTTP status code (400, 401, 403, 404, 500, etc.)
- **Network Errors**: No `error.status`, check `error.code` (ECONNABORTED, ERR_NETWORK, etc.)
- **Validation Errors**: Status 400/422, check `error.raw?.response?.data?.errors` for field-level errors

## Available Modules

| Module | Description |
|--------|-------------|
| `sdk.auth` | Authentication (login, signup, logout, etc.) |
| `sdk.addressBook` | Address management |
| `sdk.cart` | Shopping cart operations |
| `sdk.catalog` | Product catalog and categories |
| `sdk.formBuilder` | Custom form builders |
| `sdk.global` | Global utilities (tenant, API keys) |
| `sdk.home` | Home page data |
| `sdk.merchant` | Merchant operations |
| `sdk.notification` | Push notifications |
| `sdk.order` | Order management |
| `sdk.page` | Page operations |
| `sdk.pageBuilder` | Page builder functionality |
| `sdk.payment` | Payment processing |
| `sdk.places` | Places and geocoding |
| `sdk.promotional` | Banners and coupons |
| `sdk.recommendation` | Product and merchant recommendations |
| `sdk.review` | Reviews and ratings |
| `sdk.search` | Search functionality |
| `sdk.stats` | Statistics |
| `sdk.tenant` | Tenant-specific operations |
| `sdk.upload` | File uploads |
| `sdk.wallet` | Wallet operations |

## Authentication Token Management

```javascript
// Set token after login
sdk.setAuthToken('your-token-here');

// Get current request ID
const requestId = sdk.getUUID();

// Clear token on logout
sdk.setAuthToken(null);
```

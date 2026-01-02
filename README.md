# Hyperzod JavaScript SDK

Official JavaScript SDK for Hyperzod API.

## Installation

```bash
npm install @hyperzod/hyperzod-sdk
```

## Quick Start

### Basic Setup

```javascript
import HyperzodSDK from "@hyperzod/hyperzod-sdk";

// Create SDK instance
const hyperzod = HyperzodSDK({
  env: "dev", // or 'production'
  apiVariant: "default", // or 'secondary'
  tenant: "your-tenant.com", // optional, auto-detected from window.location.hostname in browser
  timeout: 30000, // optional, default 30 seconds
  uploadTimeout: 60000, // optional, default 60 seconds for uploads
});

// Use the SDK
const products = await hyperzod.catalog.listProducts();
```

### Singleton Pattern (Recommended)

To ensure you're using the same SDK instance across your application, create it once and import it everywhere:

```javascript
// hyperzod.js
import HyperzodSDK from "@hyperzod/hyperzod-sdk";

// Create a singleton instance
const hyperzod = HyperzodSDK({
  env: process.env.NODE_ENV === "production" ? "production" : "dev",
  apiVariant: "default",
});

export default hyperzod;
```

Then import it anywhere:

```javascript
// Component1.jsx
import hyperzod from "./hyperzod";
await hyperzod.auth.login({ email, password });

// Component2.jsx
import hyperzod from "./hyperzod"; // Same instance, shared auth token
await hyperzod.cart.getCart();
```

## Configuration Options

```javascript
const hyperzod = HyperzodSDK({
  env: "dev" | "production", // Environment (default: 'dev')
  apiVariant: "default" | "secondary", // API variant (default: 'default')
  tenant: "string", // Tenant domain (auto-detected in browser)
  timeout: 30000, // Request timeout in ms (default: 30000)
  uploadTimeout: 60000, // Upload timeout in ms (default: 60000)
  customHeaders: {}, // Custom headers for regular requests
  uploadCustomHeaders: {}, // Custom headers for upload requests
});
```

## Usage Examples

### Authentication

```javascript
// Login
try {
  const response = await hyperzod.auth.login({
    email: "user@example.com",
    password: "password123",
  });

  // Set auth token for subsequent requests
  hyperzod.setAuthToken(response.token);

  // Store token in localStorage
  localStorage.setItem("authToken", response.token);
} catch (error) {
  console.error("Login failed:", error);
}

// Signup
const signupResponse = await hyperzod.auth.signup({
  email: "user@example.com",
  password: "password123",
  name: "John Doe",
});

// Get logged in user
const user = await hyperzod.auth.getLoggedInUser();

// Logout
await hyperzod.auth.logout({});
hyperzod.setAuthToken(null);
```

### Catalog & Products

```javascript
// List products
const products = await hyperzod.catalog.listProducts({ page: 1, limit: 20 });

// Get product by ID
const product = await hyperzod.catalog.getProduct({ product_id: "123" });

// Search products
const searchResults = await hyperzod.catalog.searchProduct({ q: "pizza" });

// Get product categories
const categories = await hyperzod.catalog.listProductCategories();
```

## Error Handling

All SDK methods return promises that can throw `SDKError` objects:

```javascript
try {
  const response = await hyperzod.auth.login({ email, password });
} catch (error) {
  if (error.name === "SDKError") {
    console.error("Error Code:", error.code);
    console.error("HTTP Status:", error.status);
    console.error("Message:", error.message);
    console.error("Request ID:", error.requestId);

    // Handle specific errors
    if (error.status === 401) {
      // Unauthorized - clear token, redirect to login
      hyperzod.setAuthToken(null);
    } else if (error.status === 400 || error.status === 422) {
      // Validation error
      console.error("Validation failed:", error.raw?.response?.data?.errors);
    } else if (!error.status) {
      // Network error
      console.error("Network error:", error.message);
    }
  }
}
```

### Common Error Types

- **HTTP Response Errors**: `error.status` contains HTTP status code (400, 401, 403, 404, 500, etc.)
- **Network Errors**: No `error.status`, check `error.code` (ECONNABORTED, ERR_NETWORK, etc.)
- **Validation Errors**: Status 400/422, check `error.raw?.response?.data?.errors` for field-level errors

## Available API

| Module                    | Description                                  |
| ------------------------- | -------------------------------------------- |
| `hyperzod.auth`           | Authentication (login, signup, logout, etc.) |
| `hyperzod.addressBook`    | Address management                           |
| `hyperzod.cart`           | Shopping cart operations                     |
| `hyperzod.catalog`        | Product catalog and categories               |
| `hyperzod.formBuilder`    | Custom form builders                         |
| `hyperzod.global`         | Global utilities (tenant, API keys)          |
| `hyperzod.home`           | Home page data                               |
| `hyperzod.merchant`       | Merchant operations                          |
| `hyperzod.notification`   | Push notifications                           |
| `hyperzod.order`          | Order management                             |
| `hyperzod.page`           | Page operations                              |
| `hyperzod.pageBuilder`    | Page builder functionality                   |
| `hyperzod.payment`        | Payment processing                           |
| `hyperzod.places`         | Places and geocoding                         |
| `hyperzod.promotional`    | Banners and coupons                          |
| `hyperzod.recommendation` | Product and merchant recommendations         |
| `hyperzod.review`         | Reviews and ratings                          |
| `hyperzod.search`         | Search functionality                         |
| `hyperzod.stats`          | Statistics                                   |
| `hyperzod.tenant`         | Tenant-specific operations                   |
| `hyperzod.upload`         | File uploads                                 |
| `hyperzod.wallet`         | Wallet operations                            |

## Authentication Token Management

```javascript
// Set token after login
hyperzod.setAuthToken("your-token-here");

// Get current request ID
const requestId = hyperzod.getUUID();

// Clear token on logout
hyperzod.setAuthToken(null);
```

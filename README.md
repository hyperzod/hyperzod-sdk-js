# Hyperzod JavaScript SDK

Official JavaScript SDK for Hyperzod API.

## Installation

```bash
npm install @hyperzod/hyperzod-sdk
```

## Quick Start

### Basic Setup

```javascript
import HyperzodSDK from '@hyperzod/hyperzod-sdk';

// Create SDK instance
const hyperzod = HyperzodSDK({
  env: 'dev', // or 'production'
  apiVariant: 'default', // or 'secondary'
  tenant: 'your-tenant.com', // optional, auto-detected from window.location.hostname in browser
  timeout: 30000, // optional, default 30 seconds
  uploadTimeout: 60000, // optional, default 60 seconds for uploads
});

// Use the SDK
const products = await hyperzod.Catalog.listProducts();
```

### Singleton Pattern (Recommended)

To ensure you're using the same SDK instance across your application, create it once and import it everywhere:

```javascript
// hyperzod.js
import HyperzodSDK from '@hyperzod/hyperzod-sdk';

// Create a singleton instance
const hyperzod = HyperzodSDK({
  env: process.env.NODE_ENV === 'production' ? 'production' : 'dev',
  apiVariant: 'default',
});

export default hyperzod;
```

Then import it anywhere:

```javascript
// Component1.jsx
import hyperzod from './hyperzod';
await hyperzod.Auth.login({ email, password });

// Component2.jsx
import hyperzod from './hyperzod'; // Same instance, shared auth token
await hyperzod.Cart.getCart();
```

## Configuration Options

| Option                | Type                       | Default                                                  | Description                                                                                            |
| --------------------- | -------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `env`                 | `"dev" \| "production"`    | `"dev"`                                                  | Environment to use for API requests                                                                    |
| `apiVariant`          | `"default" \| "secondary"` | `"default"`                                              | API variant (determines which domain to use). See [API Variant & Domains](#api-variant--domains) below |
| `tenant`              | `string`                   | Auto-detected from `window.location.hostname` in browser | Tenant domain to use for multi-tenant requests                                                         |
| `timeout`             | `number`                   | `30000`                                                  | Request timeout in milliseconds for regular API requests                                               |
| `uploadTimeout`       | `number`                   | `60000`                                                  | Request timeout in milliseconds for upload requests                                                    |
| `customHeaders`       | `object`                   | `{}`                                                     | Custom headers to include with regular API requests                                                    |
| `uploadCustomHeaders` | `object`                   | `{}`                                                     | Custom headers to include with upload requests                                                         |

### API Variant & Domains

The `apiVariant` option determines which API domain will be used for requests. Different domains are used for regular API requests and upload requests:

#### Regular API Requests

| API Variant | Environment  | API Domain                       |
| ----------- | ------------ | -------------------------------- |
| `default`   | `dev`        | `https://api.hyperzod.dev`       |
| `default`   | `production` | `https://api.hyperzod.app`       |
| `secondary` | `dev`        | `https://api-dev.hyperzod53.com` |
| `secondary` | `production` | `https://api.hyperzod53.com`     |

#### Upload Requests

| API Variant | Environment  | Upload Domain                       |
| ----------- | ------------ | ----------------------------------- |
| `default`   | `dev`        | `https://upload.hyperzod.dev`       |
| `default`   | `production` | `https://upload.hyperzod.app`       |
| `secondary` | `dev`        | `https://upload-dev.hyperzod53.com` |
| `secondary` | `production` | `https://upload.hyperzod53.com`     |

**Example Usage:**

```javascript
// Using default variant in production
const hyperzod = HyperzodSDK({
  env: 'production',
  apiVariant: 'default', // Uses api.hyperzod.app and upload.hyperzod.app
});

// Using secondary variant in dev
const hyperzod = HyperzodSDK({
  env: 'dev',
  apiVariant: 'secondary', // Uses api-dev.hyperzod53.com and upload-dev.hyperzod53.com
});
```

### API Versioning

The SDK uses API versioning. All current APIs are organized under **V1**:

- **V1 APIs**: All existing API are located in `API/V1/` folder
  - All current API (Auth, Catalog, Cart, etc.) use V1
  - Example: `hyperzod.Catalog.listProducts()` uses the V1 implementation

- **Future V2 APIs**: When V2 is introduced, new API will be created in `API/V2/` folder and named with the `V2` suffix (e.g., `CatalogApiV2`)
  - Example: `hyperzod.CatalogV2.listProducts()` would use the V2 implementation from `API/V2/Catalog/CatalogApiV2.js`
  - Both V1 and V2 APIs can be used simultaneously in the same SDK instance
  - V2 APIs will be registered alongside V1 APIs in the SDK

**Folder Structure:**

```
API/
├── V1/           # Current API version (all existing API)
│   ├── Address/
│   ├── Auth/
│   ├── Cart/
│   ├── Catalog/
│   └── ...
└── V2/           # Future API version (when needed)
    └── ...
```

## Usage Examples

### Authentication

```javascript
// Login
try {
  const response = await hyperzod.Auth.login({
    email: 'user@example.com',
    password: 'password123',
  });

  // Set auth token for subsequent requests
  hyperzod.setAuthToken(response.token);

  // Store token in localStorage
  localStorage.setItem('authToken', response.token);
} catch (error) {
  console.error('Login failed:', error);
}

// Signup
const signupResponse = await hyperzod.Auth.signup({
  email: 'user@example.com',
  password: 'password123',
  name: 'John Doe',
});

// Get logged in user
const user = await hyperzod.Auth.getLoggedInUser();

// Logout
await hyperzod.Auth.logout({});
hyperzod.setAuthToken(null);
```

### Catalog & Products

```javascript
// List products
const products = await hyperzod.Catalog.listProducts({ page: 1, limit: 20 });

// Get product by ID
const product = await hyperzod.Catalog.getProduct({ product_id: '123' });

// Search products
const searchResults = await hyperzod.Catalog.searchProduct({ q: 'pizza' });

// Get product categories
const categories = await hyperzod.Catalog.listProductCategories();
```

## Error Handling

All SDK methods return promises that can throw `SDKError` objects:

```javascript
try {
  const response = await hyperzod.Auth.login({ email, password });
} catch (error) {
  if (error.name === 'SDKError') {
    console.error('Error Code:', error.code);
    console.error('HTTP Status:', error.status);
    console.error('Message:', error.message);
    console.error('Request ID:', error.requestId);

    // Handle specific errors
    if (error.status === 401) {
      // Unauthorized - clear token, redirect to login
      hyperzod.setAuthToken(null);
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

## Available API

| Module                    | Description                                  |
| ------------------------- | -------------------------------------------- |
| `hyperzod.Auth`           | Authentication (login, signup, logout, etc.) |
| `hyperzod.Address`        | Address management                           |
| `hyperzod.Cart`           | Shopping cart operations                     |
| `hyperzod.Catalog`        | Product catalog and categories               |
| `hyperzod.FormBuilder`    | Custom form builders                         |
| `hyperzod.Global`         | Global utilities (tenant, API keys)          |
| `hyperzod.Home`           | Home page data                               |
| `hyperzod.Merchant`       | Merchant operations                          |
| `hyperzod.Notification`   | Push notifications                           |
| `hyperzod.Order`          | Order management                             |
| `hyperzod.Page`           | Page operations                              |
| `hyperzod.PageBuilder`    | Page builder functionality                   |
| `hyperzod.Payment`        | Payment processing                           |
| `hyperzod.Places`         | Places and geocoding                         |
| `hyperzod.Promotional`    | Banners and coupons                          |
| `hyperzod.Recommendation` | Product and merchant recommendations         |
| `hyperzod.Review`         | Reviews and ratings                          |
| `hyperzod.Search`         | Search functionality                         |
| `hyperzod.Stats`          | Statistics                                   |
| `hyperzod.Tenant`         | Tenant-specific operations                   |
| `hyperzod.Upload`         | File uploads                                 |
| `hyperzod.Wallet`         | Wallet operations                            |

## Authentication Token Management

```javascript
// Set token after login
hyperzod.setAuthToken('your-token-here');

// Get current request ID
const requestId = hyperzod.getUUID();

// Clear token on logout
hyperzod.setAuthToken(null);
```

## Publishing the SDK

To publish the SDK to npm, use the following command:

```bash
npm publish --access public
```

> ⚠️ **Note**: Make sure you have updated the version in `package.json` and are logged in to the correct npm account before publishing.

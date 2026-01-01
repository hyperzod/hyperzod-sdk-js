export default function SDKError({
  message,
  code,
  status,
  requestId,
  url,
  method,
  raw,
}) {
  const error = new Error(message);
  error.name = "SDKError";
  error.code = code;
  error.status = status;
  error.requestId = requestId;
  error.url = url;
  error.method = method;
  error.raw = raw;

  // Maintains proper stack trace for where our error was thrown (only available on V8)
  if (Error.captureStackTrace) {
    Error.captureStackTrace(error, SDKError);
  }

  error.toString = function () {
    let str = `SDKError: ${this.message}`;
    if (this.code) str += ` [${this.code}]`;
    if (this.status) str += ` (HTTP ${this.status})`;
    if (this.method && this.url) str += ` ${this.method} ${this.url}`;
    if (this.requestId) str += ` (Request ID: ${this.requestId})`;
    return str;
  };

  return error;
}

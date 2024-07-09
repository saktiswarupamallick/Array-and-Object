// The Same-Origin Policy (SOP) is a critical security concept implemented by web browsers to protect users from malicious websites. It restricts how a document or script loaded from one origin can interact with resources from another origin. In the context of AJAX requests, the SOP means that an AJAX request from a web page can only communicate with the server that served the web page, not with servers from different origins.

// Definition of Origin
// An origin is defined by the combination of:

// Scheme (protocol, e.g., http, https)
// Host (domain name, e.g., example.com)
// Port (if specified, e.g., :8080)
// Two URLs have the same origin if they have identical schemes, hosts, and ports.

// Example of Same-Origin Policy
// If a web page is served from https://example.com, it can make AJAX requests to:

// https://example.com/api/data (same origin)
// But it cannot make requests to:

// http://example.com/api/data (different scheme)
// https://api.example.com/data (different host)
// https://example.com:8080/data (different port)
// Working Around Same-Origin Policy
// To work around the SOP restrictions, several methods can be used:

// Cross-Origin Resource Sharing (CORS):

// CORS is a standard that allows servers to specify who can access their resources and which HTTP methods are allowed.

// The server needs to include specific HTTP headers to allow cross-origin requests.
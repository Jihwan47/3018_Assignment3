## Helmet.js Configuration

### Configuration Applied

helmet({
            // Relaxed settings for development
            contentSecurityPolicy: false, // Disable CSP in development
            hsts: false, // No HTTPS enforcement in development
            hidePoweredBy: true, // hide freamwork, version or any vulnurability information
            dnsPrefetchControl: false, // Most of the browser prefetch DNS to improve performance, but it can be a privacy concern. Privacy Trade-off
            frameguard: {action: "deny"}, // Prevent clickjacking by disallowing the application from being embedded in frames.
            noSniff: true, // Prevent MIME type sniffing, which can lead to security vulnerabilities.
        });

### Justification

1. CSP: false
     * Using conetntSecurityPolicy is generally recommended for modern web applications or browsers to avoid many types of attacks, such as XSS vulnerabilities, tracking, frame-based attacks, and etc.
     * However, assignment3 is an API-only and serves JSON responses, so the needs of CSP is minial.

2. hsts: false
     * Using HSTS is generally recommended to protect website against protocal downgrade attacks and cookie hijacking.
     * In development environment, it is recommended to set hsts to false to allow local testing without HTTPS.

3. hidePoweredBy: true
     * Using hidePoweredBy is generally recommended to hide web server information, technology and language etc. to make it harder for attackers to identify potential vulnerabilities.

4. noSniff: true
     * Using noSniff is generally recommended to prevent MIME type sniffing, which can lead to security vulnerabilities.

5. dnsPrefetchControl: false
     * Using dnsPrefetchControl, the browser prefetch DNS to improve performance, but it can be a privacy concern. Privacy Trade-off
     * If the server requires high level of security, it is recommended to set dnsPrefetchControl to false to disable DNS prefetching. 
     * However, assignment3 is an API-only and serves JSON responses, so the needs of dnsPrefetchControl is minial.

6. frameguard: {action: "deny"}
     * Using frameguard is generally recommended to prevent clickjacing by denying the application from being embedded in frames.

### Sources

1. Helmet.js github- https://helmetjs.github.io/
2. OneUptime (How to use helmet for security in express.js) - https://oneuptime.com/blog/post/2026-01-25-helmet-security-expressjs/view


## cors.js Configuration

### Configuration Applied

if (isDevelopment) {
        // Allow all origins in development for easy testing
        return {
            origin: true,
            credentials: true,
        };
    }

    // Strict origins in production
    return {
        origin: process.env.ALLOWED_ORIGINS?.split(",") || [],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    };

### Justification

1. 

### Sources

1. MDN Web Docs (security and privacy [cors]) - https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS
2. MuleSoft (Corss-Origin Resource Sharing Policy) - https://docs.mulesoft.com/gateway/latest/policies-included-cors
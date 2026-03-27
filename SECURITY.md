/**
     * Justification
     * CSP: false
     * Using conetntSecurityPolicy is generally recommended for modern web applications or browsers to avoid many types of attacks, such as XSS vulnerabilities, tracking, frame-based attacks, and etc.
     * However, assignment3 is an API-only and serves JSON responses, so the needs of CSP is minial.
     * 
     * hsts: false
     * Using HSTS is generally recommended to protect website against protocal downgrade attacks and cookie hijacking.
     * In development environment, it is recommended to set hsts to false to allow local testing without HTTPS.
     * 
     * hidePoweredBy: true
     * Using hidePoweredBy is generally recommended to hide web server information, technology and language etc. to make it harder for attackers to identify potential vulnerabilities.
     * 
     * noSniff: true
     * Using noSniff is generally recommended to prevent MIME type sniffing, which can lead to security vulnerabilities.
     * 
     * dnsPrefetchControl: false
     * Using dnsPrefetchControl, the browser prefetch DNS to improve performance, but it can be a privacy concern. Privacy Trade-off
     * If the server requires high level of security, it is recommended to set dnsPrefetchControl to false to disable DNS prefetching. 
     * However, assignment3 is an API-only and serves JSON responses, so the needs of dnsPrefetchControl is minial.
     * 
     * frameguard: {action: "deny"}
     * Using frameguard is generally recommended to prevent clickjacing by denying the application from being embedded in frames.
     * 
     * ieNoOpen: true
     * Using ieNoOpen is generally recommended to set x-download-options header to noopen to prevent executing downloads in the site's context. 
     * And also prevent internet exproler from oepning untrusted HTML files. Assignment does not require IE. No need to set ieNoOpen to true.
     * 
     * xssFilter: true
     * Using xssfilter is generally recommended to enable the xss filter to prevent reflected xss attacks.
     * It tells browers not to ignore the given content-type. It became default in helmet 5.
     * */ 
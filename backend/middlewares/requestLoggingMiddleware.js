const requestLoggingMiddleware = (req, res, next) => {
    const { method, originalUrl, headers, query, body, ip } = req;

    const message = {
        method,
        url: originalUrl,
        ip,
        headers,
        query,
        body: body && Object.keys(body).length ? body : "No body",
    };

    console.log("📋 Request Log:", message);
    next();
};

export default requestLoggingMiddleware;

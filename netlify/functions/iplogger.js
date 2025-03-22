exports.handler = async (event) => {
    const ip = event.headers["x-nf-client-connection-ip"] || "Unknown IP";
    
    // Log IP (Store in a file, database, or send to an endpoint)
    console.log("Visitor IP:", ip);

    return {
        statusCode: 200,
        body: JSON.stringify({ ip })
    };
};

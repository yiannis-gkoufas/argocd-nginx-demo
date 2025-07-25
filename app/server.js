const express = require('express');
const app = express();
const port = 3000;

// Get version from environment variable or default
const version = process.env.APP_VERSION || '1.0.0';
const buildTime = process.env.BUILD_TIME || new Date().toISOString();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from ArgoCD Demo App!',
        version: version,
        buildTime: buildTime,
        timestamp: new Date().toISOString(),
        hostname: require('os').hostname()
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy', version: version });
});

app.get('/version', (req, res) => {
    res.json({
        version: version,
        buildTime: buildTime
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`App running on http://0.0.0.0:${port}`);
    console.log(`Version: ${version}`);
    console.log(`Build Time: ${buildTime}`);
});

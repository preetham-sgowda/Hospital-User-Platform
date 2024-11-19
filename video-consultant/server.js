// server.js
path: 'E:\suprith\study\coding\alvas hackathon'

const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
const PORT = process.env.PORT || 9000;

// PeerJS server options
const peerServer = ExpressPeerServer(app, {
    debug: true,
    path: '/myapp'
});

// Use PeerJS server
app.use('/myapp', peerServer);

// Start the Express server
app.listen(PORT, () => {
    console.log(`PeerJS server is running on port ${PORT}`);
});

const { connectDB } = require('./config/db');
const createServer = require('./server');

const app = createServer();

connectDB().then(() => {
    console.log('Mongo up and running');
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log('listening on port ' + port));
});



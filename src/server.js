require('dotenv').config();
const app = require('./app');

app.listen(process.env.PORT || 3334, () => console.log('server is running'));

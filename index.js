const express = require('express');
const app = express();
const cron = require('node-cron');

cron.schedule('*/2 * * * * *', () => { // seconds(optional), minutes, hour, day of month, month, day of week
    console.log('Cron job running which is scheduled every 2 seconds');
});

cron.schedule('*/.5 * * * *', () => {
    console.log('Cron job running which is scheduled every .5 minutes or 30 seconds');
});

const PORT = 8000;


app.listen(PORT, () => {
    console.log(`Sever running on port: ${PORT}`);
});

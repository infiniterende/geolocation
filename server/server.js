require('dotenv').config()

const express = require('express');

const ip = require('ip')
const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const WebServiceClient = require('@maxmind/geoip2-node').WebServiceClient;

// set geolocation client

const client = new WebServiceClient(process.env.ACCOUNT_KEY, process.env.LICENSE_KEY, {host: 'geolite.info'});

// asynchronous function to return country and city

const getCity = async (ipAddress) => {
    try {
        const response = await client.city(ipAddress);
        return response
    } catch(error) {
        console.log(error);
    }
    
}
const getCountry = async (ipAddress) => {
    try {
        const response = await client.country(ipAddress);
        return response
    } catch (error) {
        console.log(error)
    }
    
}

console.log('ip', ip.address())

app.get("/api", async (req, res) => {
    const city = await getCity(ip.address())
    const country = await getCountry(ip.address())
    res.json({address: ip.address(), city: city, country: country});
})

app.get("/api/:address", async (req, res) => {
    const address = req.params;
    const city = await getCity(address.address)
    const country = await getCountry(address.address)
    res.json({address: address, city: city, country: country});
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server running on port number" + PORT);
});




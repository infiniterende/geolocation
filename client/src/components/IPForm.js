import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

import {Form,Button} from "react-bootstrap"

import Display from './Display';

const IPForm = () => {
    const [ipAddress, setIPAddress] = useState("");
    const [formIP, setFormIP] = useState()
    const [location, setLocation] = useState({})


    const fetchIpAddress = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api")
            setIPAddress(response.data.address)
            setLocation({city: response.data.city, country: response.data.country, latitude: response.data.city.latitude, longitude: response.data.city.longitude})
        } catch (error) {
            
        }
    }


    useEffect( () =>  {
        fetchIpAddress()
    }, [])

    const getLocation = async () => {
        const response = await axios.get(`http://localhost:8080/api/${formIP}`)
        console.log(response)
        setIPAddress(formIP)
        setLocation({city: response.data.city.city.names.en, country: response.data.city.country.isoCode, latitude: response.data.city.location.latitude, longitude: response.data.city.location.longitude})
    }

    return (
        <>
        <Form>
            <Form.Group>
          <Form.Label>Find Location</Form.Label>
          <Form.Control
            className="form-group"
            type="text"
            placeholder="Enter IP Address or leave blank to use local IP"
            value={formIP}
            onChange={(e) => setFormIP(e.target.value)}
            name="formIP"
          ></Form.Control>
        </Form.Group>
        
      <Button
        onClick={getLocation}
        variant="contained"
        style={{ backgroundColor: "#7390FB" }}
      >
        Submit IP Address
      </Button>
        </Form>
        <Display ipAddress={ipAddress} location={location}/>
        </>
    )
}

export default IPForm
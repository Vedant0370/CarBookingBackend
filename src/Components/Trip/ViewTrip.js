import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ViewTrip = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [error, setError] = useState(null);
  const [searchCustomerName, setSearchCustomerName] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/add-trip');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCustomers(data);
        setFilteredCustomers(data); // Initialize filtered data with all trips
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data: ' + error.message);
      }
    };

    fetchCustomers();
  }, []);

  // Function to filter trips based on customer name
  const filterTrips = () => {
    const filteredData = customers.filter((customer) => {
      // Check if customer.customername is defined before filtering
      if (customer.customername) {
        return customer.customername.toLowerCase().includes(searchCustomerName.toLowerCase());
      } else {
        return false; // Return false if customer.customername is undefined
      }
    });

    setFilteredCustomers(filteredData);
  };

  useEffect(() => {
    filterTrips();
  }, [searchCustomerName]);

  return (
    <>
      <Sidebar />
      <div className="customer-Add-container">
        <div className="customer-main-container">
          <h1>View Trip</h1>
          <div className="p-4 space-y-4">
            <input
              type="text"
              placeholder="Search by Customer Name"
              className="w-full p-2 rounded border"
              value={searchCustomerName}
              onChange={(e) => setSearchCustomerName(e.target.value)}
            />
          </div>
          {error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {filteredCustomers.map((customer) => (
                <div key={customer._id} className="custom-card bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="custom-card-body p-4">
                    <h5 className="custom-card-title text-lg font-semibold mb-2">Customer Name: {customer.customername}</h5>
                    <p className="custom-card-subtitle mb-2">Mobile No: {customer.mobileno}</p>
                    <p className="custom-card-subtitle mb-2">Email: {customer.email}</p>
                    <p className="custom-card-subtitle mb-2">Address: {customer.address}</p>
                    <p className="custom-card-subtitle mb-2">Trip Type: {customer.triptype}</p>
                    <p className="custom-card-subtitle mb-2">Sub Type: {customer.triptype}</p>
                    <p className="custom-card-subtitle mb-2">Pickup Location: {customer.pickup}</p>
                    <p className="custom-card-subtitle mb-2">Date: {customer.date}</p>
                    <p className="custom-card-subtitle mb-2">Time: {customer.time}</p>
                    <p className="custom-card-subtitle mb-2">Drop Off Location: {customer.dropoff}</p>
                    <p className="custom-card-subtitle mb-2">Date: {customer.date1}</p>
                    <p className="custom-card-subtitle mb-2">Time: {customer.time1}</p>
                    <p className="custom-card-subtitle mb-2">Total Days: {customer.totaldays}</p>
                    <p className="custom-card-subtitle mb-2">Hours: {customer.hours}</p>
                    <p className="custom-card-subtitle mb-2">Vehicle: {customer.vehicle}</p>
                    {/* Add other fields as needed */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewTrip;

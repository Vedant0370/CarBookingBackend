const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 7000;

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Database connectivity to MongoDB Atlas
mongoose.connect('mongodb+srv://vedantassignment05:0Q1CWhizw7a5VNG0@car-booking.tioi0b9.mongodb.net/?retryWrites=true&w=majority', {
    // useUnifiedTopology : true,
    // bufferCommands: false, // Disable buffering
}, console.log("Connected to Database"));

// API Router handles all APIs in one route
apiRouter = express.Router();

// Handle routes here
const CustomerEnquiry = require('./src/routes/CustomerEnquiry');
const user = require('./src/routes/User');
const ShareDetails = require('./src/routes/ShareDetails');
const TripDetails = require('./src/routes/TripDetails');
const UpdateDuty = require('./src/routes/UpdateDuty');
const NewGetDetailsFromDriver = require('./src/routes/GetDetailsfromDriver');
const newCustomerPayment = require('./src/routes/AddCusPayment');
const AddVenders = require('./src/routes/AddVenders');
const AddCustomers = require('./src/routes/AddCustomer');
const AddDriver = require('./src/routes/AddDriver');
const addTrip = require('./src/routes/AddTrip');
const VenderPayment = require('./src/routes/VenderPayment');
const rateSchema = require('./src/routes/Rate');
const venderRate = require('./src/routes/VenderRate');
const corporateCustomer = require('./src/routes/CorporateCustomer');
const indivisualCustomer = require('./src/routes/IndivisualCustomer');

// Define API paths
apiRouter.use('/customer-enquiry', CustomerEnquiry);
apiRouter.use('/users', user);
apiRouter.use('/share-details', ShareDetails);
apiRouter.use('/trip-details', TripDetails);
apiRouter.use('/update-duty', UpdateDuty);
apiRouter.use('/getDetails-fromDriver', NewGetDetailsFromDriver);
apiRouter.use('/customer-payment', newCustomerPayment);
apiRouter.use('/add-venders', AddVenders);
apiRouter.use('/add-customers', AddCustomers);
apiRouter.use('/add-trip', addTrip);
apiRouter.use('/vender-payment', VenderPayment);
apiRouter.use('/customer-rate', rateSchema);
apiRouter.use('/vender-rate', venderRate);
apiRouter.use('/add-drivers', AddDriver);
apiRouter.use('/corporate-customer', corporateCustomer);
apiRouter.use('/indivisual-customer', indivisualCustomer);

// Handle all API routes
app.use('/api', apiRouter);

// Server is running on port 7000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

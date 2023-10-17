// import logo from './logo.svg';
import './App.css';
import CustomerInquiry from './Components/CustomerInquiry';
import ShareDetails from './Components/Sharedetails';
import Startenddetails from './Components/Startenddetails';
import TripDetails from './Components/TripDetails';
import UpdateDuty from './Components/UpdateDuty';
import AddPayment from './Components/AddPayment'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/LogIn';
import Home from './Components/Home'
import Sidebar from './Components/Sidebar';
import VendorPayment from './Components/VendorPayment';
import CustomerInvoice from './Components/CustomerInvoice';



function App() {
  return (
    <>
  {/* <CustomerInquiry/>
  <ShareDetails/>
  <Startenddetails /> */}
  <Router>
   
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<Home/>} />
    <Route path='/sharedetails' element={<ShareDetails/>}/>
    <Route path='/startenddetails' element={<Startenddetails/>}/>
    <Route path='/tripdetails' element={<TripDetails/>} />
    <Route path='/updateduty'  element={<UpdateDuty/>}/>
    <Route path='/addpayment'  element={<AddPayment/>}/>
    <Route path='/customerenquire'  element={<CustomerInquiry/>}/>
    <Route path='/sidebar'  element={<Sidebar/>}/>
    <Route path='/vendorpayment' element={<VendorPayment/>} />
    <Route path='/customerinvoice' element={<CustomerInvoice/>} />


  </Routes>
  </Router>
    </>
    
  );
}

export default App;

import React, { useState } from 'react';
import './Sidebar.css';
// import { FiMenu, FiX } from 'react-icons/fi'; 
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd } from 'react-icons/ai';


const Sidebar = () => {


  window.onload = function () {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    // const searchBtn = document.querySelector(".bx-search")

    closeBtn.addEventListener("click", function () {
      sidebar.classList.toggle("open")
      menuBtnChange()
    })

    function menuBtnChange() {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right")
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu")
      }
    }
  }

  // logout 
  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('user');
    // Redirect to login page
    window.location.href = '/';
  };


  return (
    <>

      <div className="sidebar" style={{ position: 'fixed', overflowY: 'auto', maxHeight: '100vh' }}>
        <div className='logo'>
          <h3 className='car-heading'>Car Booking</h3>
        </div>

        <div className="logo_details">
          <i className="bx bxl-audible icon"></i>
          <div className="logo_name">Car Booking</div>
          <i className="bx bx-menu" id="btn"></i>
        </div>
        <ul className="nav-list" >

          <li>
            <Link to={'/home'}>
              <a >
                <i className="bx bx-grid-alt"></i>
                <span className="link_name">Home</span>
              </a>
            </Link>
          </li>


  {/* Customer */}
          <div class="btn-group">
            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            
             <AiOutlineUserAdd className='user-icon'/> Customers
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">
                <Link to={'/addcustomer'}>
                  Add Customer
                </Link>
              </a></li><hr />
              <li><a class="dropdown-item" href="#">
                <Link to={'/viewcustomer'}>
                  View Customer
                </Link>
              </a></li>
            </ul>
          </div> <br/>
  {/* Customer */}


 {/* Vendor */}
          <div class="btn-group">
            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            
             <AiOutlineUserAdd className='user-icon'/> Vendor
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">
                <Link to={'/addvendor'}>
                Add Vendor
                </Link>
              </a></li><hr />
              <li><a class="dropdown-item" href="#">
                <Link to={'/viewvendor'}>
                  View Vendor
                </Link>
              </a></li>
            </ul>
          </div><br></br>
 {/* Vendor */}

{/* Add Driver */}
          <div class="btn-group">
            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            
             <AiOutlineUserAdd className='user-icon'/> Driver
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">
                <Link to={'/adddriver'}>
                Add Driver
                </Link>
              </a></li><hr />
              <li><a class="dropdown-item" href="#">
                <Link to={'/viewdriver'}>
                  View Driver
                </Link>
              </a></li>
            </ul>
          </div><br/>
{/* Add Driver */}


          {/* Rate */}

          <div class="btn-group">
            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            
             <AiOutlineUserAdd className='user-icon'/> Rate
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">
                <Link to={'/customerrate'}>
                Customer Rate
                </Link>
              </a></li>
              <li><a class="dropdown-item" href="#">
                <Link to={'/viewcustomerrate'}>
                View Customer Rate
                </Link>
              </a></li><hr />
              <li><a class="dropdown-item" href="#">
                <Link to={'/vendorrate'}>
                Vendor Rate
                </Link>
              </a></li>
              <li><a class="dropdown-item" href="#">
                <Link to={'/viewvendorrate'}>
                View Vendor Rate
                </Link>
              </a></li>
            </ul>
          </div>
{/* Rate */}


{/* Customer Inquiry */}
          <div class="btn-group">
            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            
             <AiOutlineUserAdd className='user-icon'/> Customer Enquiry
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">
                <Link to={'/customerenquiry'}>
                Add Customer Enquiry
                </Link>
              </a></li><hr />
              <li><a class="dropdown-item" href="#">
                <Link to={'/viewcustomerenquiry'}>
                View Customer Enquiry
                </Link>
              </a></li>
            </ul>
          </div><br/>
{/* Customer Inquiry */}


{/* Trip */}
          <div class="btn-group">
            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            
             <AiOutlineUserAdd className='user-icon'/> Trip
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">
                <Link to={'/addtrip'}>
                Add Trip
                </Link>
              </a></li><hr />
              <li><a class="dropdown-item" href="#">
                <Link to={'/viewtrip'}>
                View Trip
                </Link>
              </a></li>
            </ul>
          </div><br/>



 {/* Allocate Trip */}
          <div class="btn-group">
            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            
             <AiOutlineUserAdd className='user-icon'/> Allocate Trip
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">
                <Link to={'/allocatetrip'}>
                Allocate Trip
                </Link>
              </a></li><hr />
              <li><a class="dropdown-item" href="#">
                <Link to={'/ViewAllocateTrip'}>
                View Allocate Trip
                </Link>
              </a></li>
            </ul>
          </div><br/>


{/* Share Details to Customer */}
          <div class="btn-group">
            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            
             <AiOutlineUserAdd className='user-icon'/> Share Details
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">
                <Link to={'/sharedetails'}>
                Share Trip Details
                </Link>
              </a></li><hr />
              <li><a class="dropdown-item" href="#">
                <Link to={'/viewsharedetails'}>
                View Share Details
                </Link>
              </a></li>
            </ul>
          </div><br/>


{/* Get Details from Driver */}
          <div class="btn-group">
            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            
             <AiOutlineUserAdd className='user-icon'/> Get Details From Driver
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">
                <Link to={'/startenddetails'}>
                Get Trip Details
                </Link>
              </a></li><hr />
              <li><a class="dropdown-item" href="#">
                View Get Trip Details
              </a></li>
            </ul>
          </div><br/>




{/* Update Duty Slip */}
          <div class="btn-group">
            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            
             <AiOutlineUserAdd className='user-icon'/> Update Duty Slip
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">
                <Link to={'/updateduty'}>
                Add Duty Slip
                </Link>
              </a></li><hr />
              <li><a class="dropdown-item" href="#">
                <Link to={'/viewupdateduty'}>
                View Duty Slip
                </Link>
              </a></li>
            </ul>
          </div><br/>


 

{/* payment for all  */}
          <div class="btn-group">
            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            
             <AiOutlineUserAdd className='user-icon'/>Payment
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">
                <Link to={'/addpayment'}>
                Customer Payment
                </Link>
              </a></li>
              <li><a class="dropdown-item" href="#">
                <Link to={'/viewcustomerpayment'}>
                View Customer Payment
                </Link>
              </a></li><hr/>
              <li><a class="dropdown-item" href="#">
                <Link to={'/vendorpayment'}>
                Vendor Payment
                </Link>
              </a></li>
              <li><a class="dropdown-item" href="#">
                <Link to={'/viewvendorpayment'}>
                View Vendor Payment
                </Link>
              </a></li>
            </ul>
          </div><br/>


          {/* Generate Invoice */}

         <div class="btn-group">
            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            
             <AiOutlineUserAdd className='user-icon'/>Generate Invoice
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">
                <Link to={'/customerinvoice'}>
                Customer Invoice
                </Link>
              </a></li>
              <li><a class="dropdown-item" href="#">
                <Link to={'/vendorinvoice'}>
                Vendor Invoice
                </Link>
              </a></li><hr/>
              <li><a class="dropdown-item" href="#">
                <Link to={'/customerinvoicemonthly'}>
                Customer Monthly Invoice
                </Link>
              </a></li>
              <li><a class="dropdown-item" href="#">
                <Link to={'/vendorinvoicemonthly'}>
                Vendor Monthly Invoice
                </Link>
              </a></li>
            </ul>
          </div><br/>
          <br/>
          
          {/* for addign profile and logout button  */}
          <button 
          className='btn btn-primary bg-danger' 
          onClick={handleLogout}> 
            Logout
            </button>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
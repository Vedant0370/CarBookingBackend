import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Sidebar from "../Sidebar/Sidebar";

function CustomerInvoiceMonthly() {
  const [formData, setFormData] = useState({
    invoiceno: "",
    companyName: "Shivpushpa Travels Invoice",
    GST_No: "",
    companyAddress: "332, Kasba Peth  Phadke Haud Chowk,  Pune 411 0111",
    mail: "travelshivpushpa@gmail.com",
    kind_attn: "",
    Date: "",
    contactno: "",
    to: "",
    customerName: "",
    customerAddress: "",
    customerGSTNo: "",
    customerContactNo: "",
    discount: "",
    kms: "",
    amount: "",
    CGST: "",
    SGST: "",
    totalAmount: "",
    bankname: "The Cosmos Co-operative Bank Ltd",
    branchname: "Kasba Raviwar Branch, Pune 411 002",
    accountNumber: "015204301220061",
    accountHoldername: "",
    ifsccode: "COSB0000015",
    micrcode: "411164014",
  });

  const [customerList, setCustomerList] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

   const [invoiceItems, setInvoiceItems] = useState([
    // Your initial invoice items
  ]);

  const [overallTotals, setOverallTotals] = useState({
    totalCGST: 0,
    totalSGST: 0,
    totalAmount: 0,
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost:7000/api/customer-payment");
        
        if (response.ok) {
          const data = await response.json();
          setCustomerList(data);
        } else {
          console.error("Failed to fetch customers");
        }
      } catch (error) {
        console.error("API request error:", error);
      }
    };

    fetchCustomers();
  }, []);

  const handleChange = (e) => {
    const selectedCustomer = customerList.find(
      (customer) => customer.customer_Name === e.target.value
    );
    setSelectedCustomer(selectedCustomer);
  };

  const handleGenerate = () => {
    const downloadConfirmed = window.confirm('Do you want to download the invoice?');

    if (downloadConfirmed) {
        const doc = new jsPDF();

        // Add content to the PDF
        doc.setFontSize(12);

        // Header Section
        doc.text('Shivpushpa Travels Invoice', 10, 10);
        doc.text('332, Kasba Peth Phadke Haud Chowk, Pune 411 0111', 10, 20);
        doc.text('Contact No: 9325501950 / 9325501978', 10, 30);
        doc.text('Mail: travelshivpushpa@gmail.com', 10, 40);

        // Title Section
        doc.setFontSize(16);
        doc.text('Invoice', 140, 20, { className: 'uppercase-text' });

        // Invoice Details Section
        doc.setFontSize(10);
        doc.text('PO No: ', 140, 30);
        doc.text('Invoice No: ', 140, 40);
        doc.text('Date: ', 140, 50);
        doc.text('Customer ID: ', 140, 60);
        doc.text('GST No: ', 140, 70);

        // Customer Information Section
        doc.text('Customer Name: ' + formData.customer_Name, 10, 80);
        doc.text('Customer Address: ' + formData.reporting_Address, 10, 90);
        doc.text('GST No:' + formData.GST_No, 10, 100);

        // Add table with trip details
        const tableData = customerList
            .filter((customer) => customer.customerId === selectedCustomer.customerId)
            .map((trip) => [
                `${trip.vehicle_Type} from ${trip.from} to ${trip.to}`,
                trip.saccode,
                trip.total_Km,
                trip.total_Amount,
                trip.total,
                trip.SGST,
                trip.CGST,
            ]);

        // Add table headers
        const headers = ['Description', 'Sac Code', 'Kms', 'Amount', 'Total', 'SGST', 'CGST'];
        tableData.unshift(headers);

        doc.autoTable({
            head: tableData.slice(0, 1),
            body: tableData.slice(1),
            startY: 120,
            theme: 'plain',
        });

        // Add subtotal, SGST, CGST, and grand total row
        const subtotal = customerList
            .filter((customer) => customer.customerId === selectedCustomer.customerId)
            .reduce((total, trip) => total + trip.total_Amount, 0);

        const sgstTotal = customerList
            .filter((customer) => customer.customerId === selectedCustomer.customerId)
            .reduce((total, trip) => total + trip.SGST, 0);

        const cgstTotal = customerList
            .filter((customer) => customer.customerId === selectedCustomer.customerId)
            .reduce((total, trip) => total + trip.CGST, 0);

        doc.autoTable({
            head: [['', 'Subtotal', sgstTotal, cgstTotal]],
            body: [['', subtotal, sgstTotal, cgstTotal]],
            startY: doc.autoTable.previous.finalY + 10,
        });

        // Add Bank Details Section
        doc.text('Bank Details:', 10, doc.autoTable.previous.finalY + 20);
        doc.text('Bank Name: ' + formData.bankname, 10, doc.autoTable.previous.finalY + 30);
        doc.text('Branch Name: ' + formData.branchname, 10, doc.autoTable.previous.finalY + 40);
        doc.text('Account Holder Name: ' + formData.accountHoldername, 10, doc.autoTable.previous.finalY + 50);
        doc.text('Account Number: ' + formData.accountNumber, 10, doc.autoTable.previous.finalY + 60);
        doc.text('IFSC Code: ' + formData.ifsccode, 10, doc.autoTable.previous.finalY + 70);
        doc.text('MICR Code: ' + formData.micrcode, 10, doc.autoTable.previous.finalY + 80);

        // Footer Section
        doc.text('For Shivpushpa Travels', 150, doc.autoTable.previous.finalY + 30);
        doc.text('Authorised Signatory', 150, doc.autoTable.previous.finalY + 60);

        doc.save('invoice.pdf');
    }
};

  return (
    <>
      <Sidebar />
      <div className="container-customer-invoice-monthly ml-96">
        <h2
          style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "8px" }}
        >
          Monthly Customer Invoice
        </h2>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "5px",
          }}
        >
          Invoice To:
        </h2>
        <div className="form-customer-invoice-monthly">
          <div className="grid-gap-2 col-6">
            <label htmlFor="customerName" className="form-label">
              Customer Name:
            </label>
            {/* Dropdown to select a customer */}
            <select
              className="form-control-cust-inq-input"
              id="customername"
              name="customerName"
              onChange={(e) => {
                const selectedCustomer = customerList.find(
                  (customer) => customer.customer_Name === e.target.value
                );
                setSelectedCustomer(selectedCustomer);
              }}
              value={selectedCustomer ? selectedCustomer.customer_Name : ""}
            >
              <option value="">Select Customer</option>
              {customerList.map((customer) => (
                <option key={customer._id} value={customer.customer_Name}>
                  {customer.customer_Name}
                </option>
              ))}
            </select>
            <label htmlFor="GST_No" className="form-label">
              GST No:
            </label>
            <input
              className="form-control-customer-invoice-monthly"
              type="text"
              id="customerGSTNo"
              name="GST_No"
              value={formData.GST_No}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 grid-gap-2 col-6">
            <label htmlFor="Date" className="form-label">
              Kind Attn:
            </label>
            <input
              className="form-control-customer-invoice-monthly"
              type="text"
              id="kind_attn"
              name="kind_attn"
              placeholder="Kind Attn"
              value={formData.kind_attn}
              onChange={handleChange}
            />
            <label htmlFor="Date" className="form-label">
              Date:
            </label>
            <input
              className="form-control-customer-invoice-monthly"
              type="date"
              id="Date"
              name="Date"
              value={formData.Date}
              onChange={handleChange}
            />
          </div>
        </div>
        {selectedCustomer && (
          <div>
            <h3>Customer Trip Details:</h3>
            <table className="invoice-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Sac Code</th>
                  <th>Kms</th>
                  <th>Amount</th>
                  <th>Total</th>
                  <th>SGST</th>
                  <th>CGST</th>
                  {/* Add more headers as needed */}
                </tr>
              </thead>

              <tbody>
                {customerList
                  .filter(
                    (customer) =>
                      customer.customerId === selectedCustomer.customerId
                  )
                  .map((trip) => (
                    <tr key={trip._id}>
                      <td>{`${trip.vehicle_Type} from ${trip.from} to ${trip.to}`}</td>
                      <td>{trip.saccode}</td>
                      <td>{trip.total_Km}</td>
                      <td>{trip.total_Amount}</td>
                      <td>{trip.total}</td>
                      <td>{trip.SGST}</td>
                      <td>{trip.CGST}</td>
                      {/* Add more rows as needed */}
                    </tr>
                  ))}
                {/* Add subtotal, SGST, CGST, and grand total row */}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Subtotal</td>
                  <td>
                    {customerList
                      .filter(
                        (customer) =>
                          customer.customerId === selectedCustomer.customerId
                      )
                      .reduce((total, trip) => total + trip.total_Amount, 0)}
                  </td>
                  <td>
                    {customerList
                      .filter(
                        (customer) =>
                          customer.customerId === selectedCustomer.customerId
                      )
                      .reduce((total, trip) => total + trip.SGST, 0)}
                  </td>
                  <td>
                    {customerList
                      .filter(
                        (customer) =>
                          customer.customerId === selectedCustomer.customerId
                      )
                      .reduce((total, trip) => total + trip.CGST, 0)}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Grand Total</td>
                  <td>
                    {customerList
                      .filter(
                        (customer) =>
                          customer.customerId === selectedCustomer.customerId
                      )
                      .reduce(
                        (total, trip) =>
                          total + trip.total_Amount + trip.SGST + trip.CGST,
                        0
                      )}
                  </td>
                  <td>
                    {customerList
                      .filter(
                        (customer) =>
                          customer.customerId === selectedCustomer.customerId
                      )
                      .reduce((total, trip) => total + trip.SGST, 0)}
                  </td>
                  <td>
                    {customerList
                      .filter(
                        (customer) =>
                          customer.customerId === selectedCustomer.customerId
                      )
                      .reduce((total, trip) => total + trip.CGST, 0)}
                  </td>
                </tr>
              </tbody>
            </table>
            <button onClick={handleGenerate}>Generate Invoice</button>
          </div>
        )}
      </div>
    </>
  );
}

export default CustomerInvoiceMonthly;

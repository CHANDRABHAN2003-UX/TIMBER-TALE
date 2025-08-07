import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { db } from "../../Firebase";
import { getAuth } from "firebase/auth"; // Import Firebase Auth if needed for user details
import { collection, addDoc } from 'firebase/firestore'; 

export default function Purchase() {
  const navigate = useNavigate();
  // Initialize Firestore
  const auth = getAuth(); // Initialize Firebase Auth
 

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [requirements, setRequirements] = useState("");
  const [quantity, setQuantity] = useState("");

  const user = sessionStorage.getItem("userId");
  
  if (!user) {
    toast.error('You need to be logged in to complete the purchase.');
    return <Navigate to="/login" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !address || !requirements || !quantity) {
      toast.error("Please fill in all fields.");
      return;
    }
  
    try {
      console.log('Adding document to Firestore...');
      toast.success("Purchase completed successfully!");
      
      await addDoc(collection(db, 'userbookings'), {
        userId: user,
        name: name,
        address: address,
        requirements: requirements,
        quantity: quantity,
       status:1,
       //1->pending, 2->approve, 3->decline
        createdAt: new Date()
      });
  
      
      
      navigate('/');
    } catch (error) {
      console.error("Error adding document: ", error.message);
      toast.error("An error occurred while processing your purchase.");
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Complete Your Purchase</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                className="form-control"
                rows="3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="requirements">Specific Requirements</label>
              <textarea
                id="requirements"
                className="form-control"
                rows="3"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="quantity">Number of Pieces</label>
              <input
                type="number"
                id="quantity"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-block">Submit Purchase</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

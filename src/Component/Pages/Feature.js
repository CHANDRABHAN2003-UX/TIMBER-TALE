import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Feature() {
  const navigate = useNavigate();
  const design = JSON.parse(sessionStorage.getItem('selectedDesign'));

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [requirements, setRequirements] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !address || !requirements || !quantity) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Process the purchase (e.g., save to Firestore, send confirmation email, etc.)
    toast.success("Purchase completed successfully!");

    // Clear session storage and redirect
    sessionStorage.removeItem('selectedDesign');
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Complete Your Purchase</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
        </div>
        <div className="form-group">
          <label>Specific Requirements</label>
          <textarea className="form-control" value={requirements} onChange={(e) => setRequirements(e.target.value)} required></textarea>
        </div>
        <div className="form-group">
          <label>Number of Pieces</label>
          <input type="number" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit Purchase</button>
      </form>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { db } from "../../Firebase";
import { getAuth } from "firebase/auth"; // Import Firebase Auth if needed for user details
import { collection, onSnapshot } from 'firebase/firestore'; 

export default function Bookings() {
  const auth = getAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = sessionStorage.getItem("userId");

  useEffect(() => {
    if (!user) {
      toast.error('You need to be logged in to view your bookings.');
      return;
    }

    const unsubscribe = onSnapshot(collection(db, 'userbookings'), (snapshot) => {
      const fetchedBookings = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBookings(fetchedBookings);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching data: ", error.message);
      toast.error("An error occurred while fetching your bookings.");
      setLoading(false);
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Your Bookings</h2>
          {bookings.length === 0 ? (
            <div className="alert alert-info" role="alert">
              No bookings found.
            </div>
          ) : (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Requirements</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.name}</td>
                    <td>{booking.address}</td>
                    <td>{booking.requirements}</td>
                    <td>{booking.quantity}</td>
                    <td>${booking.totalPrice?.toFixed(2)}</td>
                    <td>{new Date(booking.createdAt?.toDate()).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

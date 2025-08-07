import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Designs() {
  const [data, setData] = useState([]);
  // const [user, setUser] = useState(sessionStorage.getItem("userId")); // Store user state
  const [selectedDesign, setSelectedDesign] = useState(null); // Store the design user wants to buy
  const navigate = useNavigate(); // For navigation
//  console.log(user);
  useEffect(() => {


    // Firestore data fetching
    const que = query(collection(db, "Design"));
    const unsubscribeFirestore = onSnapshot(que, (snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });

  }, []);

  const getDate = (date) => {
    let date1 = date?.toDate();
    return moment(date1).format("MMMM Do, YYYY");
  };

  

  

  return (
    <>
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">View Designs!!</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
              <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Pieces</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="d-flex flex-wrap">
          {data?.map((el, index) => (
            <div key={index} className="card m-2" style={{ height: '450px', width: '400px' }}>
              <div className="card-body d-flex flex-column">
                {el?.data?.image && (
                  <img
                    src={el.data.image}
                    height="270px"
                    width="200px"
                    className="card-img-top"
                    alt={`Image for ${el.data.DesignName}`}
                  />
                )}
                <h2 className="card-title">{el?.data?.DesignName}</h2>
                <p className="card-text flex-grow-1">{el?.data?.Description}</p>
                <h5 className="card-text">Price: &#8377;{el?.data?.Price}</h5> {/* Display the Price with Rupee Symbol */}
                <Link to={"/purchase/"+el.id}>
                <button className="btn btn-primary">
                  Buy Now
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up" /></a>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}

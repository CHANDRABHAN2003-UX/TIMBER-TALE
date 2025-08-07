import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import { app } from "../../Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [address, setAddress] = useState("");
  const [load, setLoad] = useState(false);
  const nav = useNavigate();

  const saveData = async (userID) => {
    try {
      let data = {
        username: name,
        email: email,
        subject: subject,
        address: address,
        userType: 2,
        user_id: userID,
        status: true,
        createdAt: Timestamp.now(),
      };
      await setDoc(doc(db, "users", userID), data);
      // sessionStorage.setItem("name", data.username);
      // sessionStorage.setItem("email", data.email);
      // sessionStorage.setItem("userId", userID);
      // sessionStorage.setItem("userType", data.userType);
      nav("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setLoad(true);
    const auth = getAuth(app);
    try {
      const userCredentails = await createUserWithEmailAndPassword(auth, email, password);
      let userId = userCredentails.user.uid;
      await saveData(userId);
      toast.success("User registered successfully");
      nav("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setTimeout(() => {
        setLoad(false);
      }, 1000); // Hide spinner after the response is received
    }
  };

  return (
    <>
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Register Here!!!</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                Service
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container bg-light overflow-hidden px-lg-0 mx-auto" style={{ margin: "6rem 0" }}>
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-12 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 ps-lg-0">
                <div className="section-title text-start"></div>
                {/* Spinner at the center */}
                {load && (
                  <ClipLoader
                    cssOverride={{ display: "block", margin: "0 auto" }}
                    size={100}
                    color="#A97142"
                    loading={load}
                  />
                )}
                <form onSubmit={handleForm}>
                  <h1 className="display-5 mb-4 text-center">Register</h1>
                  <div className="row g-3 mt-2">
                    <div className="col-md-6 mx-auto">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-2">
                    <div className="col-md-6 mx-auto">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-2">
                    <div className="col-md-6 mx-auto">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Your Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Your Password</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-2">
                    <div className="col-md-6 mx-auto">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Your Subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                        <label htmlFor="subject">Your Subject</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-2">
                    <div className="col-6 mx-auto">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="address"
                          style={{ height: "100px" }}
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                        <label htmlFor="address">Write here anything about You!!</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-1">
                    <div className="col-2 mx-auto">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </>
  );
}

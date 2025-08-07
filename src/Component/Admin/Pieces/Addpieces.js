import { addDoc, collection, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Firebase Storage functions
import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { db, storage } from "../../../Firebase"; // Import storage from Firebase
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners"; // Import ClipLoader from react-spinners

export default function Addpieces() {
  const [artpiece, SetArtpiece] = useState("");
  const [description, SetDescription] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading spinner
  const [file, setFile] = useState(null); // Update to hold the file directly
  const fileInputRef = useRef(null); // Create a reference for the file input

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true); // Start the spinner when the process begins

    try {
      let imageUrl = "";

      // Handle file upload if a file is selected
      if (file) {
        const fileRef = ref(storage, `images/${file.name}`); // Create a reference to the file
        await uploadBytes(fileRef, file); // Upload the file
        imageUrl = await getDownloadURL(fileRef); // Get the download URL
      }

      const data = {
        ArtpieceName: artpiece,
        Description: description,
        status: true,
        createdAt: Timestamp.now(),
        image: imageUrl, // Add image URL to the data
      };
      
      await addDoc(collection(db, "Artpiece"), data);
      toast.success("Art piece added successfully");
      SetArtpiece(""); // Reset form fields
      SetDescription("");
      setFile(null); // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Clear file input field
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, please try again later.");
    } finally {
      setLoading(false); // Stop the spinner when data is saved
    }
  };

  return (
    <>
      <ToastContainer /> {/* Add ToastContainer to render toast notifications */}
      {loading && ( // Show spinner in the middle of the screen when loading
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999, // Ensure spinner is above all other elements
            backgroundColor: "rgba(255, 255, 255, 0.7)", // Add a transparent white background
            padding: "2rem", // Increase padding to accommodate larger loader
            borderRadius: "8px"
          }}
        >
          <ClipLoader size={100} color="#A97142" loading={loading} /> {/* Increase size here */}
        </div>
      )}
      <div className={`container-fluid page-header py-5 mb-5 ${loading ? "blur" : ""}`}>
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">ADD Pieces!!</h1>
        </div>
      </div>

      <div className="container bg-light overflow-hidden px-lg-0 mx-auto" style={{ margin: '6rem 0' }}>
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-12 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 ps-lg-0">
                <form onSubmit={handleForm}>
                  <h1 className="display-5 mb-4 text-center">Pieces</h1>
                  <div className="row g-3 mt-2">
                    <div className="col-md-6 mx-auto">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="addpiece"
                          placeholder="Item Name"
                          value={artpiece}
                          onChange={(e) => SetArtpiece(e.target.value)}
                          disabled={loading} // Disable input while loading
                        />
                        <label htmlFor="addpiece">Item Name</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-2">
                    <div className="col-md-6 mx-auto">
                      <div className="form-floating">
                        <input
                          type="file"
                          className="form-control"
                          id="addpiece"
                          placeholder="Select Image"
                          onChange={(e) => setFile(e.target.files[0])} // Update file when selected
                          disabled={loading} // Disable input while loading
                          ref={fileInputRef} // Attach reference to the file input
                        />
                        <label htmlFor="addpiece">Image</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-2">
                    <div className="col-md-6 mx-auto">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="addpiece"
                          placeholder="Description"
                          value={description}
                          onChange={(e) => SetDescription(e.target.value)}
                          disabled={loading} // Disable input while loading
                        />
                        <label htmlFor="addpiece">Description</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-1">
                    <div className="col-2 mx-auto">
                      <button className="btn btn-primary w-100 py-3" type="submit" disabled={loading}>
                        {loading ? (
                          <>
                            <ClipLoader color={"#fff"} loading={loading} size={20} /> {/* Spinner Component */}
                            Adding...
                          </>
                        ) : (
                          'Add'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

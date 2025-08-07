import { addDoc, collection, doc, onSnapshot, query, Timestamp, updateDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db, storage } from "../../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

export default function Updatedesign() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [allArtPieces, setAllArtPieces] = useState([]);
  const [design, setDesign] = useState("");
  const [description, setDescription] = useState("");
  const [artPiece, setArtPiece] = useState("");
  const [price, setPrice] = useState(""); // New state for price
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [url, setUrl] = useState("");
  const [previousImage, setPreviousImage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      const designRef = doc(db, "Design", id);
      const designDoc = await getDoc(designRef);
      if (designDoc.exists()) {
        const designData = designDoc.data();
        setDesign(designData.DesignName);
        setArtPiece(designData.artPiece);
        setDescription(designData.Description);
        setPrice(designData.Price || ""); // Initialize price
        setPreviousImage(designData.image);
      } else {
        toast.error("Data doesn't exist");
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchArtPieces = async () => {
      const que = query(collection(db, "Design"));
      onSnapshot(que, (snapshot) => {
        setAllArtPieces(
          snapshot.docs.map((el) => ({
            id: el.id,
            data: el.data(),
          }))
        );
      });
    };

    fetchArtPieces();
  }, []);

  const changeImage = (e) => {
    setFileName(e.target.files[0]?.name || "");
    setFile(e.target.files[0]);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    if (!fileName) {
      saveData(previousImage);
    } else {
      const storageRef = ref(storage, "product_images/" + fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log("Error during upload:", error);
          toast.error("Failed to upload image");
          setLoading(false); // Reset loading state on error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            saveData(downloadURL);
          });
        }
      );
    }
  };

  const saveData = async (imageUrl) => {
    try {
      const data = {
        DesignName: design,
        Description: description,
        ArtPiece: artPiece,
        Price: price, // Include price in the data
        status: true,
        createdAt: Timestamp.now(),
        image: imageUrl,
      };

      const designRef = doc(db, "Design", id);
      await updateDoc(designRef, data);
      toast.success("Data updated successfully");
      navigate("/admin/managedesign");
    } catch (err) {
      console.log("Error updating document:", err);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            padding: "2rem",
            borderRadius: "8px"
          }}
        >
          <ClipLoader size={100} color="#A97142" loading={loading} />
        </div>
      )}

      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Update Designs!!</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
              <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Designs</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container bg-light overflow-hidden px-lg-0 mx-auto" style={{ margin: '6rem 0' }}>
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-12 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 ps-lg-0">
                <div className="section-title text-start"></div>
                <img src={previousImage} style={{ height: "100px", width: "100px" }} alt="Previous" />
                <form onSubmit={handleForm}>
                  <h1 className="display-5 mb-4 text-center">Designs</h1>
                  <div className="row g-3 mt-2 mb-3">
                    <div className="col-md-6 mx-auto">
                      <label>Choose One</label>
                      <div className="form-floating mb-3">
                        <select 
                          value={artPiece} 
                          onChange={(e) => setArtPiece(e.target.value)}
                          className="form-control"
                        >
                          <option disabled value="">
                            Choose one
                          </option>
                          {allArtPieces.map((el, index) => (
                            <option key={index} value={el.data.ArtpieceName || el.data.artPiece}>
                              {el.data.ArtpieceName || el.data.artPiece}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-floating">
                        <input type="text" className="form-control" id="addpiece" placeholder="Design Name"
                          value={design} onChange={(e) => setDesign(e.target.value)} />
                        <label htmlFor="text">Design Name</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-2">
                    <div className="col-md-6 mx-auto">
                      <div className="form-floating">
                        <input type="file" className="form-control" id="addpiece" placeholder="Select Image"
                          onChange={changeImage} />
                        <label htmlFor="text">Image</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-2">
                    <div className="col-md-6 mx-auto">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="addpiece" placeholder="Description"
                          value={description} onChange={(e) => setDescription(e.target.value)} />
                        <label htmlFor="text">Description</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-2">
                    <div className="col-md-6 mx-auto">
                      <div className="form-floating">
                        <input type="number" className="form-control" id="addpiece" placeholder="Price"
                          value={price} onChange={(e) => setPrice(e.target.value)} /> {/* Price input field */}
                        <label htmlFor="text">Price</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-1">
                    <div className="col-2 mx-auto">
                      <button className="btn btn-primary w-100 py-3" type="submit">Update</button>
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

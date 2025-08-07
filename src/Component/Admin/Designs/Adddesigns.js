import { addDoc, collection, query, onSnapshot, Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "../../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

export default function Adddesigns() {
  const [allartpiece, setAllArtpiece] = useState([]);
  const [design, SetDesign] = useState("");
  const [description, SetDescription] = useState("");
  const [price, SetPrice] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [url, setUrl] = useState("");
  const [artPiece, setArtPiece] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const que = query(collection(db, "Artpiece"));
    const unsubscribe = onSnapshot(que, (doc) => {
      setAllArtpiece(
        doc.docs.map((el) => ({
          id: el.id,
          data: el.data(),
        }))
      );
    });

    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []);

  const changeImage = (e) => {
    setFileName(e.target.files[0]?.name || "");
    setFile(e.target.files[0]);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please upload an image");
      return;
    }

    setLoading(true);

    const storageRef = ref(storage, 'product_images/' + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.log(error);
        toast.error("Failed to upload image");
        setLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
        }).catch((error) => {
          console.log(error);
          toast.error("Failed to get image URL");
          setLoading(false);
        });
      }
    );
  };

  useEffect(() => {
    if (url) {
      const saveData = async () => {
        try {
          const data = {
            artPiece: artPiece,
            DesignName: design,
            Description: description,
            Price: price,
            image: url,
            status: true,
            createdAt: Timestamp.now(),
          };
          await addDoc(collection(db, "Design"), data);
          toast.success("Design added successfully!");

          // Clear states
          SetDesign("");
          SetDescription("");
          SetPrice("");
          setArtPiece("");
          setFile(null);
          setFileName("");
          setUrl("");

          // Reset file input
          document.getElementById('addpiece').value = "";
        } catch (err) {
          console.log(err);
          toast.error("Something went wrong, try later");
        } finally {
          setLoading(false);
        }
      };

      saveData();
    }
  }, [url]);

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
          <h1 className="display-3 text-white mb-3 animated slideInDown">Add Designs!!</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
              <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Pieces</li>
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

                <form onSubmit={handleForm}>
                  <h1 className="display-5 mb-4 text-center">Designs</h1>
                  <div className="row g-3 mt-2 ">
                    <div className="col-md-6 mx-auto">
                      <select value={artPiece} onChange={(e) => { setArtPiece(e.target.value) }}>
                        <option disabled selected value={""}>Choose one</option>
                        {allartpiece?.map((el, index) => (
                          <option key={index} value={el?.data?.ArtpieceName}>{el?.data?.ArtpieceName}</option>
                        ))}
                      </select>
                      <div className="form-floating">
                        <input type="text" className="form-control" id="addpiece" placeholder="Design Name"
                          value={design} onChange={(e) => { SetDesign(e.target.value) }}
                        />
                        <label htmlFor="text">Design Name</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-2 ">
                    <div className="col-md-6 mx-auto">
                      <div className="form-floating">
                        <input type="file" className="form-control" id="addpiece" placeholder="Select Image"
                          onChange={changeImage} required
                        />
                        <label htmlFor="text">Image</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-2 ">
                    <div className="col-md-6 mx-auto">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="addpiece" placeholder="Description"
                          value={description} onChange={(e) => { SetDescription(e.target.value) }}
                        />
                        <label htmlFor="text">Description</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-2 ">
                    <div className="col-md-6 mx-auto">
                      <div className="form-floating">
                        <input type="number" className="form-control" id="addpiece" placeholder="Price"
                          value={price} onChange={(e) => { SetPrice(e.target.value) }} // Price input field
                        />
                        <label htmlFor="text">Price</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-1">
                    <div className="col-2 mx-auto">
                      <button className="btn btn-primary w-100 py-3" type="submit">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up" /></a>
    </>
  );
}

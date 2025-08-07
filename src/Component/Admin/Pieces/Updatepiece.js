import { updateDoc, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db, storage } from "../../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners"; // Import ClipLoader from react-spinners

export default function Updatepiece() {
    const { id } = useParams();
    const nav = useNavigate();

    const [previousImage, setPreviousImage] = useState("");
    const [artpiece, setArtpiece] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false); // State to manage loading spinner

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const productRef = doc(db, "Artpiece", id);
        const productDoc = await getDoc(productRef);
        if (productDoc.exists()) {
            const productData = productDoc.data();
            setArtpiece(productData.ArtpieceName);
            setDescription(productData.Description);
            setPreviousImage(productData.image);
        } else {
            toast.error("Data doesn't exist");
        }
    };

    const changeImage = (e) => {
        setFileName(e.target.files[0].name);
        setFile(e.target.files[0]);
    };

    const handleForm = async (e) => {
        e.preventDefault();
        setLoading(true); // Start the spinner

        if (!file) {
            await saveData();
        } else {
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
                    setLoading(false); // Stop the spinner on error
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    setUrl(downloadURL);
                }
            );
        }
    };

    useEffect(() => {
        if (url) {
            saveData();
        }
    }, [url]);

    const saveData = async () => {
        try {
            const data = {
                ArtpieceName: artpiece,
                Description: description,
                image: url || previousImage, // Use the new URL or previous image if no new image is uploaded
            };

            const productRef = doc(db, "Artpiece", id);
            await updateDoc(productRef, data);

            toast.success("Data updated");
            nav("/admin/managePiece");
        } catch (err) {
            toast.error("Something went wrong!!");
            console.error(err);
        } finally {
            setLoading(false); // Stop the spinner when data is saved
        }
    };

    return (
        <>
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Update Pieces!!</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Pieces</li>
                        </ol>
                    </nav>
                </div>
            </div>

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
                    <ClipLoader size={100} color="#A97142" loading={loading} /> {/* Spinner Component */}
                </div>
            )}

            <div className={`container bg-light overflow-hidden px-lg-0 mx-auto ${loading ? "blur" : ""}`} style={{ margin: '6rem 0' }}>
                <div className="container contact px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-12 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 ps-lg-0">
                                <div className="section-title text-start"></div>
                                <img src={previousImage} style={{ height: "100px", width: "100px" }} alt="Previous" />
                                <form onSubmit={handleForm}>
                                    <h1 className="display-5 mb-4 text-center">Pieces</h1>
                                    <div className="row g-3 mt-2 ">
                                        <div className="col-md-6 mx-auto">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="addpiece" placeholder="Item Name"
                                                    value={artpiece} onChange={(e) => { setArtpiece(e.target.value) }}
                                                    disabled={loading} // Disable input while loading
                                                />
                                                <label htmlFor="addpiece">Item Name</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-3 mt-2 ">
                                        <div className="col-md-6 mx-auto">
                                            <div className="form-floating">
                                                <input type="file" className="form-control" id="addpiece" placeholder="Select Image"
                                                    onChange={changeImage}
                                                    disabled={loading} // Disable input while loading
                                                />
                                                <label htmlFor="addpiece">Image</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-3 mt-2 ">
                                        <div className="col-md-6 mx-auto">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="addpiece" placeholder="Description"
                                                    value={description} onChange={(e) => { setDescription(e.target.value) }}
                                                    disabled={loading} // Disable input while loading
                                                />
                                                <label htmlFor="addpiece">Description</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-3 mt-1">
                                        <div className="col-2 mx-auto">
                                            <button className="btn btn-primary w-100 py-3 " type="submit" disabled={loading}>
                                                {loading ? (
                                                    <>
                                                        <ClipLoader color={"#fff"} loading={loading} size={20} /> {/* Spinner Component */}
                                                        Updating...
                                                    </>
                                                ) : (
                                                    'Update'
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

            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up" /></a>
        </>
    );
}

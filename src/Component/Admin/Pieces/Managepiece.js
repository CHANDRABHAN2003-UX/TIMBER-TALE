import { collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../Firebase";
import { toast } from "react-toastify";
import moment from "moment";
import { ClipLoader } from "react-spinners";

export default function Managepiece() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        // Fetch data
        const que = collection(db, "Artpiece");

        const unsubscribe = onSnapshot(que, snapshot => {
            const dataList = snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }));
            setData(dataList);
            setLoading(false); // Data has been loaded
        }, error => {
            console.error("Error fetching data:", error);
            toast.error("Failed to fetch data");
            setLoading(false); // Stop loading on error
        });

        // Clean up the subscription on component unmount
        return () => unsubscribe();
    }, []);

    const getDate = (date) => {
        const date1 = date?.toDate();
        return moment(date1).format("MMMM Do, YYYY");
    };

    const deleteData = async (id) => {
        if (window.confirm("You want to delete data?")) {
            try {
                await deleteDoc(doc(db, "Artpiece", id));
                toast.success("Data deleted successfully");
            } catch (err) {
                console.log(err);
                toast.error("Internal server error");
            }
        }
    };

    const updateStatus = async (id, status) => {
        try {
            const docRef = doc(db, "Artpiece", id);
            await updateDoc(docRef, { status });
            toast.success("Status updated");
        } catch (err) {
            console.log(err);
            toast.error("Internal server error");
        }
    };

    return (
        <>
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Manage Pieces!!</h1>
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
                {loading ? (
                    // Show spinner while loading
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
                ) : (
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <td>Sno</td>
                                <td>Category Name</td>
                                <td>Description</td>
                                <td>Images</td>
                                <td>Status</td>
                                <td>Created</td>
                                <td></td>
                                <td>Delete</td>
                                <td>Action</td>
                                <td>Edit</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((el, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{el.data?.ArtpieceName}</td>
                                    <td>{el.data?.Description}</td>
                                    <td>
                                        {el.data?.image ? (
                                            <>
                                                <Link to={el.data?.image}>View here</Link>
                                                <img src={el.data?.image} style={{ height: "100px", width: "100px" }} alt="Art piece" />
                                            </>
                                        ) : (
                                            "No Image"
                                        )}
                                    </td>
                                    <td>{el.data?.status?.toString()}</td>
                                    <td>{getDate(el.data?.createdAt)}</td>
                                    <td>{el.data?.status === true ? "Enable" : "Disable"}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => deleteData(el.id)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </td>
                                    <td>
                                        {el.data?.status === true ?
                                            <button onClick={() => {
                                                if (window.confirm("Do you want to Disable the status?")) {
                                                    updateStatus(el.id, false);
                                                }
                                            }}>
                                                Disable
                                            </button>
                                            :
                                            <button onClick={() => {
                                                if (window.confirm("Do you want to Enable the status?")) {
                                                    updateStatus(el.id, true);
                                                }
                                            }}>
                                                Enable
                                            </button>
                                        }
                                    </td>
                                    <td>
                                        <Link to={"/admin/updatepiece/" + el.id} className="btn btn-outline-success">
                                            <i className="fa fa-edit"></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top">
                <i className="bi bi-arrow-up" />
            </a>
        </>
    );
}

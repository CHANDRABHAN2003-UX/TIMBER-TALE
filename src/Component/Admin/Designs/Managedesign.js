import { collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { query } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../../Firebase";
import { toast } from "react-toastify";
import moment from "moment";
import { ClipLoader } from "react-spinners";

export default function Managedesign() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const que = query(
            collection(db, "Design")
        );
        
        const unsubscribe = onSnapshot(que, (doc) => {
            setData(
                doc.docs.map((el, index) => ({
                    id: el.id,
                    data: el.data(),
                }))
            );
            setLoading(false); // Set loading to false when data is loaded
        });

        return () => unsubscribe(); // Cleanup the subscription on unmount
    }, []);

    const getDate = (date) => {
        let date1 = date?.toDate();
        return moment(date1).format("MMMM Do, YYYY");
    };

    const deleteData = async (id) => {
        if (window.confirm("You want to delete data?")) {
            try {
                await deleteDoc(doc(db, "Design", id));
                toast.success("Data deleted successfully");
            } catch (err) {
                console.log(err);
                toast.error("Internal server error");
            }
        }
    };

    const updateStatus = async (id, status) => {
        try {
            const docRef = doc(db, "Design", id);
            let data = { status: status };
            await updateDoc(docRef, data);
            toast.success("Status updated");
        } catch (err) {
            console.log(err);
            toast.error("Internal server error");
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
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Manage Designs!!</h1>
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
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <td>Sno</td>
                            <td>Category Name</td>
                            <td>Design Name</td>
                            <td>Description</td>
                            <td>Price</td> {/* Added Price Header */}
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
                        {
                            data?.map((el, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{el?.data?.artPiece}</td>
                                    <td>{el?.data?.DesignName}</td>
                                    <td>{el?.data?.Description}</td>
                                    <td> &#8377;{el?.data?.Price}</td> {/* Display the Price */}
                                    <td>
                                        <Link to={el?.data?.image}>View here</Link>
                                        <img src={el?.data?.image} style={{ height: "100px", width: "100px" }} />
                                    </td>
                                    <td>{el?.data?.status?.toString()}</td>
                                    <td>{getDate(el?.data?.createdAt)}</td>
                                    <td>{el?.data?.status === true ? "Enable" : "Disable"}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => { deleteData(el.id) }} >
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </td>
                                    <td>
                                        {el?.data?.status === true ?
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
                                        <Link to={"/admin/updatedesign/" + el.id} className="btn btn-outline-success">
                                            <i className="fa fa-edit"></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up" /></a>
        </>
    );
}

import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../../Firebase";

export default function Adminhome() {
    const [load, setLoad] = useState(true);
    const [user, setUser] = useState(0);
    const [artpiece, setArtpiece] = useState(0);
    const [design, setDesign] = useState(0);

    useEffect(() => {
        getUserCount();
        getCategoryCount(); // Corrected function name
        getProductCount();  // Corrected function name
        setTimeout(() => {
            setLoad(false);
        }, 1500);
    }, []);

    const getUserCount = async () => {
        let ref = collection(db, "users");
        let que = await getCountFromServer(ref);
        console.log(que.data().count);
        setUser(que.data().count);
    };

    const getCategoryCount = async () => {
        let ref = collection(db, "Artpiece");
        let que = await getCountFromServer(ref);
        console.log(que.data().count);
        setArtpiece(que.data().count);
    };

    const getProductCount = async () => {
        let ref = collection(db, "Design");
        let que = await getCountFromServer(ref);
        console.log(que.data().count);
        setDesign(que.data().count);
    };

    return (
        <>
            <div className="container-fluid page-header py-5 mb-5" style={{ backgroundColor: "#4CAF50" }}>
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Dashboard</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Dashboard</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <ClipLoader cssOverride={{ display: "block", margin: "0 auto" }} size={100} loading={load} />
            <div className={load === true ? "d-none" : "container"}>
                <div className="row">
                    <div className="col-md-4 p-3">
                        <div className="card p-4 shadow-lg rounded border-0 text-center" style={{ background: 'linear-gradient(135deg, #f76b1c, #ffb300)', color: 'white' }}>
                            <div className="card-body">
                                <i className="fas fa-users fa-3x mb-3"></i> {/* FontAwesome Icon */}
                                <h2 className="card-title">Happy Clients</h2>
                                <h3 className="display-4">{user}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 p-3">
                        <div className="card p-4 shadow-lg rounded border-0 text-center" style={{ background: 'linear-gradient(135deg, #36d1dc, #5b86e5)', color: 'white' }}>
                            <div className="card-body">
                                <i className="fas fa-palette fa-3x mb-3"></i> {/* FontAwesome Icon */}
                                <h2 className="card-title">Total Category</h2>
                                <h3 className="display-4">{artpiece}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 p-3">
                        <div className="card p-4 shadow-lg rounded border-0 text-center" style={{ background: 'linear-gradient(135deg, #2b5876, #4e4376)', color: 'white' }}>
                            <div className="card-body">
                                <i className="fas fa-box-open fa-3x mb-3"></i> {/* FontAwesome Icon */}
                                <h2 className="card-title">Total Products</h2>
                                <h3 className="display-4">{design}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

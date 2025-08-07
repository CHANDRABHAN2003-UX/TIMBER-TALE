import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Firebase";

export default function Artpiece() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const que = query(collection(db, "Artpiece"));
    const unsubscribe = onSnapshot(que, (snapshot) => {
      const artPiecesMap = new Map();

      snapshot.docs.forEach((doc) => {
        const artPieceData = doc.data();
        const artPieceName = artPieceData.ArtpieceName;

        if (!artPiecesMap.has(artPieceName)) {
          artPiecesMap.set(artPieceName, {
            id: doc.id,
            data: artPieceData,
          });
        }
      });

      setData(Array.from(artPiecesMap.values()));
    }, (error) => {
      console.error("Error fetching art pieces: ", error); // Error handling
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Art Pieces!!</h1>
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
          {data.length > 0 ? (
            data.map((el, index) => (
              <div key={index} className="card m-2" style={{ height: '420px', width: '400px' }}>
                <div className="card-body d-flex flex-column">
                  {el?.data?.image && (
                    <img
                      src={el.data.image}
                      height="270px"
                      width="200px"
                      className="card-img-top"
                      alt={`Image for ${el.data.ArtpieceName}`}
                    />
                  )}
                  <h2 className="card-title">{el?.data?.ArtpieceName}</h2>
                  <p className="card-text flex-grow-1">{el?.data?.Description}</p>
                  {/* Removed Explore More button */}
                </div>
              </div>
            ))
          ) : (
            <p>No art pieces available.</p>
          )}
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up" /></a>
    </>
  );
}

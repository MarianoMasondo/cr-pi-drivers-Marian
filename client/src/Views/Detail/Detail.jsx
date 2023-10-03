import { useDispatch, useSelector } from "react-redux";
import "./Detail.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDriverDetail } from "../../Redux/Actions/Actions";

const Detail = () => {
  const{ id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const driverDetail = useSelector((state) => state.driverDetail)
  console.log(driverDetail);

  useEffect(() => {
    dispatch(getDriverDetail(id));
  }, [dispatch, id]); 
  

  return (
    <div className="detail-container">
       <p> Id:{driverDetail.id}</p>
        <h1>Name:{driverDetail.name}</h1>
        <p>Lastname:{driverDetail.lastname}</p>
        <p>Nationality={driverDetail.nationality}</p>
        <img src={driverDetail.image} className="img-container" alt="" />
        <p>Birthdate:{driverDetail.birthdate}</p>
        <p>Teams:{driverDetail.teams}</p>
        <p>Description:{driverDetail.description}</p>
    </div>
  )
}

export default Detail;
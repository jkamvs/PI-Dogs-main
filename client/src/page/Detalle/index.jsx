import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getDogId} from "../../redux/actions";
import {useParams} from "react-router-dom";

export default function Detalle() {
  const {id}=useParams();
  const dispatch = useDispatch();
  const dogRedux = useSelector((state)=>state.dog);
  useEffect(()=>{
    dispatch(getDogId(id))
  },[dispatch])
  return (
    <div>
      <p>{dogRedux.temperament}</p>
    </div>
  )
}

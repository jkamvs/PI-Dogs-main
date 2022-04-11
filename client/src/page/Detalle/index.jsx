import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllDogs, getDogId} from "../../redux/actions";
import {Link, useParams} from "react-router-dom";
import style_css from "./style.module.css";
import Loading from "../../components/Loading";

export default function Detalle() {
    const [loading,setloading]=useState(true)
    const urldata = useParams();
    const dispatch = useDispatch();
    const dogRedux = useSelector((state) => state.dog);
    const alldogs = useSelector((state) => state.dogs)
    useEffect(() => {
        dispatch(getDogId(urldata.id))
        dispatch(getAllDogs())
    }, [dispatch])
    let datoid = {};
    alldogs.forEach(item => {
        if (item.id === urldata.id) {
            datoid = item
        }
    })
    ////Loading
    setTimeout(()=>{
        setloading(false)
    },3000)
    /////
    return (<>
        {loading?<Loading/>:null}
        <div className={style_css.titleNav}>
            <h1>DETALLE {urldata.id}</h1>
            <Link className={style_css.link} to={'/My_Dogs'}>MY DOGS</Link>
        </div>
        <div className={style_css.container}>
            <div className={style_css.img}>
                <img
                    src={datoid.image ? datoid.image.url : "https://st2.depositphotos.com/2222024/5609/i/600/depositphotos_56093859-stock-photo-happy-little-orange-havanese-puppy.jpg"}/>

            </div>
            <div className={style_css.detalle}>
                <div className={style_css.font}>
                    <p className={style_css.titleCard}>{urldata.nombre}</p>
                    <p className={style_css.temp}>{dogRedux.temperament}</p>
                    <br/>
                    <p className={style_css.data}>Weight: {dogRedux.weight} kg</p>
                    <br/>
                    <p className={style_css.data}>Height: {dogRedux.height} cm</p>
                    <br/>
                    <p className={style_css.data}>Life {dogRedux.life_span}año.</p>
                    <img className={style_css.sello} src={require('../../Recurso_kawai/perro-Kenneth-04.png')} alt={'Sello'}/>
                </div>

            </div>
        </div>


    </>)
}

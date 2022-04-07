import {useState} from "react";
import {useDispatch
} from "react-redux";
import {getDogRaza} from "../../redux/actions";
import style_css  from './styles.module.css'
export default function Search() {
    const [searchRaza, setSearchRaza] = useState('')
    const dispatch = useDispatch();
    function mayusculaSearch(as) {
        let arr = as.split(' ');
        let datoArr = [];
        arr.forEach((item) => {
            datoArr.push(item.charAt(0).toUpperCase() + item.slice(1));
        });
        return datoArr.join(" ");
    }
    function buscar  (){
        dispatch( getDogRaza(searchRaza))
    }
    const handleChange = (e) => {
       let dato = mayusculaSearch(e.target.value)
        setSearchRaza(dato)
    }
    return (<div>
        <input
            className={style_css.search}
            type={'text'}
            placeholder={'Search'}
            value={searchRaza}
            onChange={(e) => handleChange(e)}
        />
        <button className={style_css.btnSearch} onClick={buscar}>Buscar</button>
    </div>)
}
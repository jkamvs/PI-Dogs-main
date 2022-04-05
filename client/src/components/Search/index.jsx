import {useState} from "react";
import {useDispatch,
   // useSelector
} from "react-redux";
import {getDogRaza} from "../../redux/actions";

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
    return (<>
        <input
            type={'text'}
            placeholder={'Search'}
            value={searchRaza}
            onChange={(e) => handleChange(e)}
        />
        <button onClick={buscar}>Buscar</button>
    </>)
}
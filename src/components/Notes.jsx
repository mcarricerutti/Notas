import { BsChevronCompactLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BiHighlight } from "react-icons/bi";

const Notes = () => {
    return(
        <>
        <div>
            <h2> <BsChevronCompactLeft/> Carpetas</h2>
            <h3>Notas</h3>
            <div>Buscador <BsSearch/></div>
            <p>Sin Notas</p>
            <div> <BiHighlight/> </div>
        </div>
        </>
    )
}

export default Notes;
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiFolderOn } from "react-icons/ci";
import { BsChevronCompactRight } from "react-icons/bs";
import { BiFolderPlus } from "react-icons/bi";
import { BiHighlight } from "react-icons/bi";

const Files = () => {
    return(
        <>
        <div>
            <h1>Carpetas</h1>
            <h3><CiFolderOn/> Notas </h3>
            <h3> N° <BsChevronCompactRight/> </h3>
            <div> <BiFolderPlus/> </div>
            <div> <BiHighlight/> </div>
        </div>
        </>
    )
}

export default Files;
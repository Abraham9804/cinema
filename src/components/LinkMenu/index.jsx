import { Link } from "react-router-dom"




const LinkMenu = ({url, children}) => {
    return (
        <Link to={url}> 
        {children} 
        </Link>
    )
}

export default LinkMenu
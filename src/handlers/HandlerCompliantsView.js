import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const HandlerCompliantsView = () => {

    const location = useLocation();

    const compliants = useLoaderData();
    console.log(compliants);
    
    
    const showIssuer = location.pathname.split('/')[1] === "admin";

    const navigate = useNavigate();
    function viewCompliant(id){
        navigate(`${id}/view`)
    }
    return ( 
    <>
        <div className='compliant-summary'>
            <div>
                <p className="key-text">New Compliants</p>
                <p className="value-text">a</p>
            </div>
            <div>
                <p className="key-text">Compliants Pending</p>
                <p className="value-text">a</p>
            </div>
        </div>
        <table className='user-list'>
                <thead>
                <tr>
                    <th>S. NO</th>
                    <th>Category</th>
                    <th>Compliant Id</th>
                    <th>Compliant Title</th>
                    <th>Raised By</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {compliants.map((e,i)=>{
                    return(
                    <tr key={e.compliantId} onClick={() => viewCompliant(e.compliantId)}>
                        <td>{i + 1}</td>
                        <td>{e.category}</td>
                        <td>{e.compliantId}</td>
                        <td>{e.title}</td>
                        <td>{e.issuedBy}</td>
                        <td>{e.status}</td>
                    </tr>
                )})}
                </tbody>
            </table>
        <Link to="new">
                <md-fab class="fab">
                    <md-icon slot="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></md-icon>
                </md-fab>
            </Link>
    </> );
}
 
export const compliantsLoaderUser = async() => {
    const res = await axios.get('/compliants')
     return res.json();
}

export default HandlerCompliantsView;
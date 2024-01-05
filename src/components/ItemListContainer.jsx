import PropTypes from 'prop-types';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            
        
        <ul className="lista">
        <p className='greeting'>{greeting}</p>
        <li className="nav-item">
                
                                <a className="nav-link" href="#">
                                    Remeras <i className="fa-solid fa-shirt fa-lg"></i>
                                </a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" href="#">
                                    Pantalones <i className="fa-solid fa-person-walking fa-lg"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Zapatillas <i className="fa-solid fa-shoe-prints fa-lg"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Pelotas <i className="fa-solid fa-futbol fa-lg"></i>
                                </a>
                            </li>

                           
        
        </ul>

       
        </div>
    )

}
ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};   
export default ItemListContainer;                
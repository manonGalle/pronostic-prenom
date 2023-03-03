import baby from '../../assets/baby.jpg';
import './Thanks.css';

function Thanks ({ firstname }) {

    return(
        <>
            <h1>Merci {firstname}</h1>
            <p>Un petit aperçu du petit bout à naître...</p>
            <img src={baby}/>
        </>
    )
}

export default Thanks;
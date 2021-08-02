import {Link} from 'react-router-dom';

function About () 
{
    return (
        <div>
            <h4 style={{textAlign:'center',fontSize:'1.3em'}}>Version 1.0.0</h4>
            <Link to="/" ><p style={{textAlign:'center',fontSize:'1.3em'}}>Go back</p></Link>
        </div>
    )
}

export default About

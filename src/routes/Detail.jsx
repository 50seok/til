import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);

    const getMoive = async () => {
        const json = await(await fetch(`
       https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
       ).json();
       setDetails(json.data.movie);
       setLoading(false);
    }
    useEffect(() =>{
       getMoive();
    }, []);
    console.log(details);
    return (
        <>
        <div>
        {loading ? <h1>Loading.....</h1> 
        : (
            <div>
                <h1>{details.title}</h1>
                <img src={details.large_cover_image} alt="" />
            </div> 
        )}
        </div>
       </>
    )
}

export default Detail;
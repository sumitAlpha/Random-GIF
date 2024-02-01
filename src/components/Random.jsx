import react from "react"
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  // const[gif ,Setgif]=useState("");

  // const[loading, setloading]=useState(false);

  // async function fetchData(){
  //   setloading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag} `
  //   const {data}= await axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url
  //   Setgif(imageSource);
  //   setloading(false);
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])

     
     //custom gif se use kiye    
   const{gif,loading,fetchData}= useGif();

  return (
    <div className='w-1/2  bg-green-600 rounded-lg border 
    mx-auto border-black  flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className= ' mt-[15px] text-2xl underline uppercase font-bold'> A Random Gif</h1>

      {
        loading ? (<Spinner/>):(  <img src= {gif} alt='gifs ' width="450"/>)
      }


      <button onClick={() => fetchData()}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] cursor-pointer">

        Generate 

      </button>
    </div>
  )
}

export default Random

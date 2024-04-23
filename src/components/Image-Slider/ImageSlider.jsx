import {useEffect, useState} from "react";
import { BsArrowLeftCircle,BsArrowRightCircle } from "react-icons/bs";
import "./style.css";
const ImageSlider = ({url,limit=5,page=1}) => {

    const [images,setImages]=useState([]);
    const [currentSlide,setCurrentSlide]=useState(0)
    const [errorMsg,setErrorMsg]=useState(null);
    const [loading,setLoading]=useState(false)

    async function fetchImages(getUrl){
        try{
            setLoading(true)
            const response=await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data=await response.json();

            if(data){
                setImages(data);
                setLoading(false);
            }
        }catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        if(url!=="") fetchImages(url);
    }, [url]);
    console.log(images)
if(loading){
    return <div>Loading.. Please Wait!</div>
}
if(errorMsg){
    return <div>Error Occurred {errorMsg}</div>
}
const handlePrevious=()=>{
    setCurrentSlide(currentSlide===0? images.length-1:currentSlide-1)
}
const handleNext=()=>{
    setCurrentSlide(currentSlide===images.length-1?0:currentSlide+1)
}

setTimeout(()=>{
    handleNext()
},10000)
    return (
        <>
            <div className="container">
                <BsArrowLeftCircle onClick={handlePrevious} className="arrow left-arrow"/>
                {
                    images && images.length?
                        images.map((imageItem,index)=>(
                            <img key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={currentSlide===index? "current-img": "current-img hide-current-image"}
                            />
                        ))
                        : null}
                <BsArrowRightCircle onClick={handleNext} className="arrow arrow-right"/>
                <span className="circle-indicator">
                    {images && images.length?
                        images.map((_,index)=>(
                            <button key={index} onClick={()=>setCurrentSlide(index)} className={currentSlide===index?"current-indicator":"current-indicator inactive-indicator"}></button>
                        ))
                    : null}
                </span>
            </div>
        </>
    );
};

export default ImageSlider;
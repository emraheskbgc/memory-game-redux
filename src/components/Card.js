import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lastClick, open } from '../redux/memorySlice'

function Card({image}) {

    const dispatch = useDispatch();
    const opened = useSelector((state) => state.opened);
    const lastClicked = useSelector((state) => state.lastClicked)
    const matched = useSelector((state) => state.matched);
    const [isFlip, setIsFlip] = useState(false)

    const handleClick= () => {
        dispatch(lastClick(image))

        if(!isFlip){
            setIsFlip(true);
            dispatch(open(image));
        }
    }
    useEffect(() => {
        if(opened.length===0) {
          const delay = setTimeout(() => {
            // Only flip back if the cards don't match
            if (!matched.includes(image)) {
              setIsFlip(false);
            }
          }, 600);
          return () => clearTimeout(delay);
        }
      }, [opened, lastClicked, image, matched]);

  return (
    <>
      <div className={`memCard ${isFlip? 'opened' : ''}`} onClick={handleClick}>
        <div className="front">?</div>
        <div className="back" >
        <img src={image} alt="" className='bgImg' />
        </div>
      </div>
      
    </>
  )
}

export default Card
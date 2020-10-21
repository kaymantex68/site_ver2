import React from 'react';
import classes from './Slider.module.css';
import i1 from '../src/pics/1.jpg'
import i2 from '../src/pics/2.jpg'
import i3 from '../src/pics/3.jpg'
import i4 from '../src/pics/4.jpg'
import i5 from '../src/pics/5.png'
import ImgComp from './ImgComp'
function Slider(){
    let slideArr=[
    <ImgComp src={i1}/>,
    <ImgComp src={i2}/>,
    <ImgComp src={i3}/>,
    <ImgComp src={i4}/>,
    <ImgComp src={i5}/>];
    const[x,setX]=React.useState(0)
    const goLeft=()=>{
        (x=== 0)? setX(-100*(slideArr.length-1)) : setX(x+100);
    };
    const goRight=()=>{
        (x=== -100*(slideArr.length-1))? setX(0) : setX(x-100);
    };
    return(
        <div className={classes.Slider}>
            {slideArr.map((item,index)=>{
                return (
                <div key={index} className={classes.Slide} style={{transform:`translateX(${x}%)`}}>
                    {item}
                </div>
                );
            })}
            <button className={classes.goLeft} onClick={goLeft} >
            <i class="fas fa-chevron-left"></i>
            </button>
            <button className={classes.goRight} onClick={goRight} >
            <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}


export default Slider; 
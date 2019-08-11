import React from 'react';

const random = (currentpage, totalPage) => {
    let dots = [];
    for (let i = 1; i <= totalPage; i++) {
        dots.push(<span className={currentpage === i ? 'dotBlue' : 'dotGrey' && currentpage < i ? 'dotGrey' : 'dotGreen'} key={i}>{i}</span>)
    }
    return dots
}
const ProgressDot = ({ currentpage, totalPage }) =>
    <>
        {
            random(currentpage, totalPage)
        }
    </>
export default ProgressDot;
    // className={ `grey currentpage==i?"blue":i<currentpage?"gree":""`}
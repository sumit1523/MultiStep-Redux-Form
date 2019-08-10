import React from 'react';

const ProgressDot = ({ page }) =>
    <div>
        <span className={page === 1 ? 'dotBlue' : 'dotGrey' && page < 1 ? 'dotGrey' : 'dotGreen'} >1</span>
        <span className={page === 2 ? 'dotBlue' : 'dotGrey' && page < 2 ? 'dotGrey' : 'dotGreen'} >2</span>
        <span className={page === 3 ? 'dotBlue' : 'dotGrey' && page < 3 ? 'dotGrey' : 'dotGreen'}>3</span>
    </div>

export default ProgressDot;

import React from "react";

const Rank = ({ name, entries, position }) => {
    return (
        <div>
            <div className='white f3'>
                {`${name}, your current entry count is...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
            <div className='white f3'>
                {'And your rank is...'}
            </div>
            <div className='white f1'>
                {position}
            </div>
        </div>
    );
}

export default Rank;
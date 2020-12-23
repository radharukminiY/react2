import React from 'react';

const News = (props) => {
    console.log("inside news ",props)

    const renderList = props.newsdata.map((data) => {
        return(
            <div>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })

    return(
        <div>
            {renderList}
        </div>
    )
}

export default News;
import React from 'react'
import "./featured.css"
const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrRVDKMjFh3ci0bDOhXa8WG-1MWFiAUnrMw&usqp=CAU" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Seafood paella</h1>
                    <h2>Addicted to seafood</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoHxWFBD1zQ5cHOy3KenKQ3_l-a8zhf4dIw&usqp=CAU" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Shushi</h1>
                    <h2>Eat like a Viking!</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZnywt5OWveMLkmfM1QKn8Je-VXzt2rFa3TA&usqp=CAU" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Bibimbap</h1>
                    <h2>Healthy, nutritious, and pretty</h2>
                </div>
            </div>
        </div>
    )
}
export default Featured;
import React from "react";
import reviews from "./data";

export const Review = () => {
    {reviews.map((review) => {
        const {id, author, job, image, text} = [review]
        return (
            <>
            <div key={id}>
                <img src={image} alt={author} />
                <h4>{author}</h4>
                <p>{job}</p>
                <p>{text}</p>
            </div>
            </>
        )
    })}

}
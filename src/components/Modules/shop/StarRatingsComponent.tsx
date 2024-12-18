"use client"

import dynamic from "next/dynamic";
const StarRatings = dynamic(() => import("react-star-ratings"), { ssr: false });
const StarRatingsComponent = ({ rating }: { rating: number }) => {
  return (
    <StarRatings
      rating={Number(rating)}
      starRatedColor="#ffd700"
      numberOfStars={5}
      name="rating"
      starSpacing="2px"
      starDimension="15px"
    />
  );
};

export default StarRatingsComponent;

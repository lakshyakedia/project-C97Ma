import React from 'react';

const ReviewSection = () => {
    const [reviews, setReviews] = React.useState([]);

    // Fetch reviews from the database and set them in the state
    React.useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('api/reviews');
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews: ', error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div>
            <h2>Customer Reviews</h2>
            <div>
                {reviews.map((review, index) => (
                    <div key={index}>
                        <h3>{review.title}</h3>
                        <p>{review.description}</p>
                        <p>Rating: {review.rating}/5</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
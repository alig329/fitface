import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      text: `Hello Mam It was my 1st day of 3rd part and trust me I can see the changes in myself
      1. My collar bones are visible
      2. I feel so relaxed.
      3. My dark circles are getting lighter.
      Thanks a lot for such amazing results mam...Can't wait to see more amazing results ❤️🙏🏽`,
      name: 'Angela Lui',
      date: 'Joined the marathon on 22.02.2022',
      avatar: 'https://via.placeholder.com/150' // Placeholder for user icon
    },
    {
      text: `Yes, I'm doing your marathon daily and I have got amazing results. My skin tone improved and my jawline is now more visible.
      I've now got an improved sleep moreover I rarely get headaches now. Thank you so much, Karina. Lots of love.😍`,
      name: 'Melisa Denver',
      date: 'Joined on 12.03.2022',
      avatar: 'https://via.placeholder.com/150' // Placeholder for user icon
    },
    {
      text: `Hi Karina! Wanted to thank you for this program, I had quite an issue with under-eye bags and nothing ever worked as your marathon! Overall my face just changed so much! I just finished the 21 days program and it will become my daily routine for sure! Lots of love❤️❤️❤️`,
      name: 'Sarah Lewin',
      date: 'Joined the marathon on 16.05.2022',
      avatar: 'https://via.placeholder.com/150' // Placeholder for user icon
    },
    {
      text: `So after seeing the results I got so emotional, I cried like a baby because in a long time I could see something of my real face, the face that was always underneath the mask. So thank you so so much for the love share, you teach us to learn how to love ourselves stronger. My best wishes to you for the new year coming.`,
      name: 'Alisa Mur',
      date: 'Joined the marathon on 14.04.2022',
      avatar: 'https://via.placeholder.com/150' // Placeholder for user icon
    }
  ];

  return (
    <div className="reviews">
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <div className="user-info">
            <img src={review.avatar} alt={`${review.name} avatar`} className="avatar" />
            <div>
              <h4>{review.name}</h4>
              <p className="date">{review.date}</p>
            </div>
          </div>
          <p className="review-text">{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

// export default function ReadMore(){
//     return<>
//         <h2>Service Comp.</h2>
//     </>
// }
// -----------------------------------
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// const ReadMore = () => {
//   const location = useLocation();
//   const data = location.state?.data;
//   console.log(data);
//   ----------------------------------------------
  // const { id } = useParams();
  // const [bookData, setBookData] = useState(null);
  // const [userPaid, setUserPaid] = useState(false); // Replace with actual user payment status

  // useEffect(() => {
  //   // Simulate checking if the user has paid
  //   setUserPaid(true); // Replace this with actual check

  //   const fetchBookData = async () => {
  //     const response = await fetch(`/api/books/${id}`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setBookData(data);
  //     } else {
  //       console.error('Failed to fetch book data');
  //     }
  //   };

  //   fetchBookData();
  // }, [id]);

  // if (!bookData) {
  //   return <p>Loading...</p>;
  // }
// ----------------------------------------
//   return (
//     <div>
//       <h2>{bookData?.title}</h2>
//       <img src={bookData.image} alt={bookData.title} />
//       {userPaid ? (
//         <p>{bookData.story}</p>
//       ) : (
//         <div>
//           <p>Subscribe to read this book.</p>
//           <button>Subscribe Now</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReadMore;



import React, { useState, useEffect } from 'react';

function ReadMore({ bookData, userPaid }) {
  // Use bookData and userPaid safely here

  return (
    <div>
      <h1>{bookData?.title}</h1>
      <p>{userPaid ? 'User has paid' : 'User has not paid'}</p>
    </div>
  );
}

export default ReadMore;
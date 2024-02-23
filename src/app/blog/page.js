// import React from "react";
// import styles from "./page.module.css";
// import Link from "next/link";
// import Image from "next/image";

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// const page = async () => {
//   const data = await getData();
//   console.log(data);
//   return (
//     <div className={styles.mainContainer}>
//       {data.map((item) => (
//         <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
//           <div className={styles.imageContainer}>
//             <Image
//               src={item.url}
//               alt=""
//               width={400}
//               height={250}
//               className={styles.image}
//             />
//           </div>
//           <div className={styles.content}>
//             <h1 className={styles.title}>{item.title}</h1>
//             <p className={styles.desc}>{item.url}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default page;

// pages/index.js
'use client'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '@/redux/dataSlice';
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.data);
 

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataStart());
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data)
        dispatch(fetchDataSuccess(data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };
    fetchData();
   
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.mainContainer}>
      {items.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.url}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.url}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;

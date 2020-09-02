import React from 'react';


  





const Space = () => {

    const router = useRouter();

    return (
        <div>
            <h1> This is about Space ! </h1>
            
        </div>
    );
};

export default Space;


// import {db } from "../../src/db"

// export default function Picture({job}) {
//     return <div><h1>{job.title}</h1></div>;

//     export async function getServerSideProps({ params }) {
//         const job = await db>Selection('*')
//         .from("jobs")
//         .where({ id: params.id })
//         .first();
//         console.log(job)

//         return {
//             props: {job},
//         };
//     }

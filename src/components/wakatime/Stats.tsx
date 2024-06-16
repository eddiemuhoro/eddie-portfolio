import React from 'react';

const Stats: React.FC = () => {
    return (
        <section className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold text-center'>Top Languages</h1>
        <figure className='h-96'>
<embed className='h-full rounded-lg' src="https://wakatime.com/share/@eddiemuhoro/92d36c57-2d31-43a5-913f-2c08b6d594c3.svg"></embed>
     </figure>
     <h2 className='text-2xl font-bold text-center'>Coding Activity (Last one Year)</h2>
     <figure ><embed src="https://wakatime.com/share/@eddiemuhoro/552af84d-5466-407c-a24b-85e731bf67b4.svg"></embed></figure>
     </section>
    );
};

export default Stats;
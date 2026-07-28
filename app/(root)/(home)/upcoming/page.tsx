import React from 'react'
import CallList from '@/components/CallList';

const UpcomingPage = () => {
    return (
        <section className='flex size-full flex-col gap-10 text-white'>
            <h1 className='text-xl font-bold lg:text-3xl'>Upcoming Meetings</h1>
            
            <CallList type="upcoming" />
        </section>
    )
}

export default UpcomingPage
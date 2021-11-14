import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Event from '../Event/Event';
import './Home.css'

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('https://damp-island-46503.herokuapp.com/events')
            .then(res => setEvents(res.data))
    }, [])

    return (
        <div className="top">
            <Header></Header>
            <div className="text-center mt-12 ">
                <h1 className="text-4xl font-bold">I Grow by Helping Peple in Need</h1>
                <div className="flex items-center justify-center mt-6">
                    <div className="flex border-2 border-blue-200 rounded">
                        <input type="text" className="px-4 py-2 w-80" placeholder="Search..." />
                        <button className="px-4 text-white bg-blue-600 border-l rounded ">
                            Search
                        </button>
                    </div>
                </div>

            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-12 mx-40">
                {
                    events?.map(event => <Event
                        key={event._id}
                        event={event}


                    ></Event>)
                }
            </div>

        </div>
    );
};

export default Home;
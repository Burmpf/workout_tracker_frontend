import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
    const [diaryEntries, setDiaryEntries] = useState([]);

    useEffect(() => {
        fetchDiaryEntries();
    }, []);

    const fetchDiaryEntries = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/dailylogs/`);
            const formattedEntries = response.data.map((entry) => ({
                ...entry,
                start: new Date(entry.date),
                end: new Date(entry.date),
                title: `Mood: ${entry.mood}`,
            }));
            setDiaryEntries(formattedEntries);
        } catch (error) {
            console.error('Error fetching diary entries:', error);
        }
    };

    return (
        <div>
            <h1>Calendar</h1>
            <Calendar
                localizer={localizer}
                events={diaryEntries}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
};

export default CalendarPage;

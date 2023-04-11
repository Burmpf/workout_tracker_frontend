import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DailyDiaryForm = () => {
    const [date, setDate] = useState('');
    const [sleep, setSleep] = useState('');
    const [weight, setWeight] = useState('');
    const [mood, setMood] = useState('');
    const [muscleGroups, setMuscleGroups] = useState([]);
    const [workouts, setWorkouts] = useState([]);

    const addWorkout = () => {
        setWorkouts([...workouts, { exercise: '', sets: '', reps: '', weight: '' }]);
    };

    const updateWorkout = (index, field, value) => {
        const newWorkouts = [...workouts];
        newWorkouts[index][field] = value;
        setWorkouts(newWorkouts);
    };

    const removeWorkout = (index) => {
        setWorkouts(workouts.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            date,
            sleep,
            weight,
            mood,
            muscleGroups,
            workouts,
        };

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/dailylogs/`,
                data
            );
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            {/* Date input */}
            <Form.Group controlId="date">
                <Form.Label>Date:</Form.Label>
                <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </Form.Group>
    
            {/* Sleep duration input */}
            <Form.Group controlId="sleep">
                <Form.Label>Hours of sleep:</Form.Label>
                <Form.Control
                    type="number"
                    value={sleep}
                    onChange={(e) => setSleep(e.target.value)}
                />
            </Form.Group>
    
            {/* Weight input */}
            <Form.Group controlId="weight">
                <Form.Label>Current weight:</Form.Label>
                <Form.Control
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </Form.Group>
    
            {/* Mood input */}
            <Form.Group controlId="mood">
                <Form.Label>Mood:</Form.Label>
                <Form.Control as="select" value={mood} onChange={(e) => setMood(e.target.value)}>
                    <option value="">Select mood</option>
                    <option value="1">Very Poor</option>
                    <option value="2">Poor</option>
                    <option value="3">Fair</option>
                    <option value="4">Good</option>
                    <option value="5">Very Good</option>
                </Form.Control>
            </Form.Group>
    
            {/* Muscle groups input */}
            <Form.Group controlId="muscleGroups">
                <Form.Label>Muscle groups:</Form.Label>
                <Form.Control
                    as="select"
                    value=""
                    onChange={(e) => setMuscleGroups([...muscleGroups, e.target.value])}
                >
                    <option value="">Select muscle group</option>
                    <option value="Arms">Arms</option>
                    <option value="Legs">Legs</option>
                    <option value="Back">Back</option>
                    <option value="Chest">Chest</option>
                    <option value="Abs">Abs</option>
                </Form.Control>
            </Form.Group>
            <ul>
                {muscleGroups.map((group, index) => (
                    <li key={index}>{group}</li>
                ))}
            </ul>
    
            {/* Workouts input */}
            {workouts.map((workout, index) => (
                <Form.Group key={index}>
                    <Form.Label>Workout {index + 1}</Form.Label>
                    <Form.Control
                        placeholder="Exercise"
                        value={workout.exercise}
                        onChange={(e) => updateWorkout(index, 'exercise', e.target.value)}
                    />
                    <Form.Control
                        type="number"
                        placeholder="Sets"
                        value={workout.sets}
                        onChange={(e) => updateWorkout(index, 'sets', e.target.value)}
                    />
                    <Form.Control
                        type="number"
                        placeholder="Reps"
                        value={workout.reps}
                        onChange={(e) => updateWorkout(index, 'reps', e.target.value)}
                    />
                    <Form.Control
                        type="number"
                        placeholder="Weight"
                        value={workout.weight}
                        onChange={(e) => updateWorkout(index, 'weight', e.target.value)}
                    />
                    <Button variant="danger" onClick={() => removeWorkout(index)}>
                        Remove
                    </Button>
                </Form.Group>
            ))}
    
            <Button variant="primary" onClick={addWorkout}>
                Add Workout
            </Button>
    
            <Button variant="primary" onClick={addWorkout}>
            Add Workout
        </Button>

        <Button variant="success" type="submit">
            Submit
        </Button>
    </Form>
);

};
export default DailyDiaryForm;
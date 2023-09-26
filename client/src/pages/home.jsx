import { useEffect, useState } from "react";
import WorkoutDetails from "../components/workoutDetails";

const Home = () => {
  const [workout, setworkout] = useState(null);
  useEffect(() => {
    const getWorkouts = async () => {
      const response = await fetch("http://localhost:3000/api/workout");
      const json = await response.json();

      if(response.ok){
        setworkout(json);
      }
    };
    getWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workout && workout.map((workout)=>(
            <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
      </div>
    </div>
  );
};
export default Home;
import { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setIsLoadedMeetups] = useState([]);

  fetch(
    "https://react-getting-started-b1f1d-default-rtdb.firebaseio.com/meetups.json"
  )
    .then((response) => {
      response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setIsLoadedMeetups(data);  
    });

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;

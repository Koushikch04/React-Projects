import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

function AllMeetupsPage() {
  const [dataLoading, setDataLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    console.log("Hello");
    setDataLoading(true);
    fetch("https://react-http-1fd45-default-rtdb.firebaseio.com/meetups.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setDataLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (dataLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section>
      <h1>All Meetups</h1>
      {!dataLoading && <MeetupList meetups={loadedMeetups} />}
    </section>
  );
}

export default AllMeetupsPage;

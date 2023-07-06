import EventList from "../../components/events/EventList"
import { getAllEvents } from "../../dummy-data"

function AllEventsPage() {

    const events = getAllEvents()

    return (
        <>
            <EventList items={events} />
        </>
    )

}

export default AllEventsPage
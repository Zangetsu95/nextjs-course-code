import { useRouter } from "next/router"
import { getFilteredEvents } from '../../dummy-data'
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage() {

    const router = useRouter()

    const filterData = router.query.slug

    console.log('filterData :>> ', filterData);

    if (!filterData) {
        return <p className="center" >Loading...</p>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear
    const numMotnh = +filteredMonth

    if (isNaN(numYear) || isNaN(numMotnh) || numYear > 2030 || numYear < 2021 || numMotnh < 1 || numMotnh > 12) {
        return (
            <>
                <ErrorAlert>
                    <p>Invalid filter.Please adjust your values !</p>
                    <div className='center'>
                        <Button link='/events'>Show All Events</Button>
                    </div>
                </ErrorAlert>

            </>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMotnh
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>No events found for the chosen filter !</p>
                    <div className='center'>
                        <Button link='/events'>Show All Events</Button>
                    </div>
                </ErrorAlert>

            </>
        )

    }

    const date = new Date(numYear, numMotnh - 1)

    return (
        <>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </>
    )
}

export default FilteredEventsPage
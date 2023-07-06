import { useRouter } from "next/router"
import { getFilteredEvents } from '../../dummy-data'

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
        return <p>Invalid filter.Please adjust your values !</p>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMotnh
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>No events found for the chosen filter !</p>
    }

    return (
        <>
            <h1>Slug of an event</h1>
        </>
    )
}

export default FilteredEventsPage
import { getFeaturedEvents } from '../dummy-data'

function HomePage() {

    const featuredEvents = getFeaturedEvents()

    return (
        <>
            <h1>Home Page</h1>
        </>
    )
}

export default HomePage
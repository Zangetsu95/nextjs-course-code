import Link from 'next/link'

function EventItem(props) {

    const { title, image, date, location, id } = props

    const humanReadableDate = new Date(date).toLocaleDateString('fr', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAdress = location.replace(',', '\n')

    const exploreLink = '/events/${id}'

    return (
        <li>
            <img src={'/' + image} alt={title}></img>
            <div>
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <time>{humanReadableDate}</time>
                </div>
                <div>
                    <address>{formattedAdress}</address>
                </div>
                <div>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    )
}
export default EventItem
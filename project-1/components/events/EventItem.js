import Link from 'next/link'
import classes from './EventItem.module.css'

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
        <li className={classes.item}>
            <img src={'/' + image} alt={title}></img>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                </div>
                <div className={classes.date}>
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <address>{formattedAdress}</address>
                </div>
                <div className={classes.actions}>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    )
}
export default EventItem
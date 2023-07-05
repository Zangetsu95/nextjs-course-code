import Link from 'next/link'
import classes from './EventItem.module.css'
import Button from '../ui/button'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/adress-icon'
import ArrowRightIcon from '../icons/arrow-right-icons'

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
                    <DateIcon />
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <address>{formattedAdress}</address>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}
export default EventItem
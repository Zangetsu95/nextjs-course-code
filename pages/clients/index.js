import Link from "next/link"

function ClientsPage() {

    const clients = [
        { id: 'mark', name: "Mark Landers" },
        { id: 'kratos', name: "Kratos" },
    ]


    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map(client => <li key={client.id}><Link href={`/clients/${client.id}`}>{client.name}</Link></li>)}

                {/* alternative way link 
                
                    <Link href={{
                        pathname : "/clients/[id]",
                        query : {id : client.id}
                    }}</Link>
                */}
            </ul>
        </div>
    )
}

export default ClientsPage
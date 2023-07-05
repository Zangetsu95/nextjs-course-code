import { useRouter } from "next/router"


function PortfollioProjectPage() {
    const router = useRouter()

    console.log('router.pathname :>> ', router.pathname);
    console.log(router.query)
    /**
     * send a request to some backend server
     * to fetch the piece of data with an id of router.query.projectid
     */

    return (
        <div>
            <h1>Portfollio Project</h1>
        </div>
    )
}

export default PortfollioProjectPage
import Trust from "./ui/Trust"

const trusts = [
    {
        name: "Instant Pricing and Booking Confirmation",
        src: "https://thearchitectsdiary.com/wp-content/uploads/2018/12/Hire-A-Cleaning-Service.jpg",
        details: "from $199"
    },
    {
        name: "Trusted 3000+ customer all over Australia",
        src: "https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2020/08/home-cleaning-service.jpg?fit=1024%2C684&ssl=1",
        details: "from $199"
    },
    {
        name: "Available 24/hrs 7 Days a Week",
        src: "https://alpinemaintenance.com/wp-content/uploads/2019/10/cleanoffice.jpeg",
        details: "from $199"
    },
    {
        name: "Premium Service Guaranteed",
        src: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UDYQMPCSMYI6TPNXIT4URTAGAU.jpg&w=540",
        details: "from $199"
    }

]

function Trusts() {
    return (
        <div className="mt-8 mb-4 h-full min-w-screen scrollbar-hide lg:mx-auto">
            <h1 className="header">Trusted Cleaning Experts at your door</h1>
            <div className="w-full mt-7 pl-5 flex flex-nowrap space-x-6 overflow-auto scrollbar-none">
           {trusts.map((trust) => (
               <Trust key={trust.src}
                name={trust.name}
                details={trust.details}/>
           ))}
           </div>          
        </div>
    )
}

export default Trusts

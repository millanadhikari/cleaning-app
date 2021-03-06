import Services from "./ui/Services"


const services = [
    {
        name: "End-of Lease",
        src: "https://thearchitectsdiary.com/wp-content/uploads/2018/12/Hire-A-Cleaning-Service.jpg",
        details: "from $199"
    },
    {
        name: "General Clean",
        src: "https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2020/08/home-cleaning-service.jpg?fit=1024%2C684&ssl=1",
        details: "from $199"
    },
    {
        name: "Office Clean",
        src: "https://alpinemaintenance.com/wp-content/uploads/2019/10/cleanoffice.jpeg",
        details: "from $199"
    },
    {
        name: "Carpet Clean",
        src: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UDYQMPCSMYI6TPNXIT4URTAGAU.jpg&w=540",
        details: "from $199"
    }

]

function SelectService({setIsopen}) {
    return (
        <div className="mt-40 scrollbar-hide sm:mx-auto">
            <h1 className="header">Select a Service</h1>
            <div className="w-full pl-5 grid grid-rows-2 grid-cols-2 
            gap-x-28 gap-y-4 overflow-x-auto scrollbar-none ">

                {services.map((service) => (

                    <Services
                        key={service.src}
                        name={service.name}
                        src={service.src}
                        details={service.details}
                        setIsopen={setIsopen} />


                ))}
            </div>
           

        </div>
    )
}

export default SelectService

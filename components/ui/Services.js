import Image from 'next/image'

function Services() {
    return (
        <div className="flex space-x-3 mt-5 items-center cursor-pointer">
            <Image
                className="rounded-xl transition
                duration-200 transform ease-in hover:scale-105 hover:rounded-xl"
                src={'https://thearchitectsdiary.com/wp-content/uploads/2018/12/Hire-A-Cleaning-Service.jpg'}
                height={100}
                width={120}
                objectFit="cover"
                // layout='fill'
               
               
                />
            <span>
            <h2 className="text-lg font-semibold">End of Lease Clean</h2>
            <p className="text-md text-gray-600">starting from $199</p>
            </span>

        </div>
    )
}

export default Services

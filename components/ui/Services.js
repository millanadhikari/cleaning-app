import Image from 'next/image'

function Services({name, details, src}) {
    return (
        <div className="w-80 flex space-x-2 mt-5 items-center cursor-pointer">
            <Image
                className="rounded-xl shadow-md transition: ;
                duration-200 transform ease-in hover:scale-105 hover:rounded-xl"
                src={src}
                height={80}
                width={90}
                objectFit="cover"
                // layout='fill'
               
               
                />
            <span>
            <h2 className="text-md font-semibold">{name}</h2>
            <p className="text-sm text-gray-600">{details}</p>
            </span>

        </div>
    )
}

export default Services

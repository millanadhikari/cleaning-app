import Services from "./ui/Services"

function SelectService() {
    return (
        <div className="flex flex-col m-5 mt-40">
            <h1 className="text-gray-800 text-2xl font-bold">Select a Service</h1>

            <Services/>
        </div>
    )
}

export default SelectService

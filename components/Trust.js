import {StarIcon} from '@heroicons/react/solid'

function Trust() {
    return (
        <div className="flex justify-center items-center bg-blue-900 w-full p-4 flex-wrap gap-7 py-6 md:space-x-7 lg:space-x-20">
            <div className="flex gap-4 text-yellow-50 text-[0.7rem] font-semibold">
                <p className="bg-yellow-500 w-9 h-9 rounded-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
                    </svg>
                </p>
                <div>
                    <p>The only same day</p>
                    <p>cleaners in Australia</p>
                </div>
            </div>
            <div className="flex gap-3 text-yellow-50 text-[0.7rem] font-semibold">
                <p className="text-lg bg-yellow-500 w-9 h-9 rounded-sm flex items-center justify-center">G</p>
                <div>
                    <div className="flex items-center justify-center">
                    <p className="mr-2">4.5</p>
                    <StarIcon className="h-5 w-4 text-yellow-500"/> 
                    <StarIcon className="h-5 w-4 text-yellow-500"/> 
                    <StarIcon className="h-5 w-4 text-yellow-500"/> 
                    <StarIcon className="h-5 w-4 text-yellow-500"/> 
                    </div>
                    
                    
                    <p>Google rating</p>
                </div>
            </div>
            <div className="flex gap-3 text-yellow-50 text-[0.7rem] font-semibold">
                <p className="text-lg bg-yellow-500 w-9 h-9 rounded-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </p>
                <div>
                    <p>1k Professional</p>
                    <p>Cleaners and growing</p>
                </div>
            </div>
        </div>
    )
}

export default Trust

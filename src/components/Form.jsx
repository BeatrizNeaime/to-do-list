import React from 'react'
import Subtitle from './Subtitle'

const Form = () => {
    return (
        <div className="flex w-full justify-center">
            <div className='flex flex-col bg-medium-blue p-3 md:p-5 rounded-md mt-5'>
                <Subtitle text="Add a new item" />
                <form action="">
                    <div className="flex flex-col gap-2 md:flex-row my-3">
                        <input type="text" placeholder='Title'
                            className='p-2 bg-light-gray font-roboto rounded-md md:w-[25%]'
                        />
                        <input type="text" placeholder='description'
                            className='p-2 bg-light-gray font-roboto rounded-md md:w-[25%]'
                        />
                        <input type="date" placeholder='date'
                            className='p-2 bg-light-gray font-roboto rounded-md md:w-[25%]'
                        />
                        <button className='bg-light-orange rounded-md p-2 font-roboto hover:bg-deep-blue hover:text-white md:w-40 flex items-center justify-center gap-2' > Add <ion-icon name="add-outline"></ion-icon> </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
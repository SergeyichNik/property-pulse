"use client"
import {useState} from "react";

const AddPropertyPage = () => {

    const [fields, setFields] = useState({
        type: '',
        name: '',
        description: '',
        location: {
            street: '',
            city: '',
            state: '',
            zipcode: '',
        },
        beds: '',
        baths: '',
        square_feet: '',
        amenities: [],
        rates: {
            weekly: '',
            monthly: '',
            nightly: '',
        },
        seller_info: {
            name: '',
            email: '',
            phone: '',
        },
        images: [],
    });

    const handleImageChange = (e) => {
        const { files } = e.target;

        // Clone images array
        const updatedImages = [...fields.images];

        // Add new files to the array
        for (const file of files) {
            updatedImages.push(file);
        }

        // Update state with array of images
        setFields((prevFields) => ({
            ...prevFields,
            images: updatedImages,
        }));
    };

    return (
        <section className='bg-blue-50'>
            <div className='container m-auto max-w-2xl py-24'>
                <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
                    <form
                        action='/api/properties'
                        method='POST'
                        encType='multipart/form-data'
                    >
                        <div className='mb-4'>
                            <label
                                htmlFor='images'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Images (Select up to 4 images)
                            </label>
                            <input
                                type='file'
                                id='images'
                                name='images'
                                className='border rounded w-full py-2 px-3'
                                accept='image/*'
                                multiple
                                onChange={handleImageChange}
                                required
                            />
                        </div>
                        <div>
                            <button
                                className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                                type='submit'
                            >
                                Add Property
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default AddPropertyPage;

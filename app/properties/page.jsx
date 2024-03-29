import PropertyCard from "../../components/PropertyCard/PropertyCard";

import {callApi} from "../../api/utils";
import {fetchProperties} from "../../api/requests";
import PropertySearch from "../../components/PropertySearch/PropertySearch";


const PropertiesPage = async () => {

    const properties = await callApi(fetchProperties, []);
    return (
        <>
            <section class='bg-blue-700 py-4'>
                <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start'>
                    <PropertySearch />
                </div>
            </section>
            <section className='px-4 py-6'>
                <div className='container-xl lg:container m-auto px-4 py-6'>
                    <h1 className='text-2xl mb-4'>Browse Properties</h1>
                    {properties.length === 0 ? (
                        <p>No properties found</p>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {properties.map((property, index) => (
                                <PropertyCard property={property} key={index} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default PropertiesPage;

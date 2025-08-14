import SectionTitle from '../Shared/SectionTitle';

const MyBookings = () => {

    const a = [];

    return (
        <div className='min-h-[80vh] w-full my-12'>
            
            <SectionTitle heading={'my bookings'} subheading={'Excellent Ambience'}></SectionTitle>

            <div className="overflow-x-auto w-[80%] mx-auto bg-white shadow-lg">

                <div className="flex justify-around text-black mb-8">
                    <h2 className="text-2xl font-bold">Total Booking: 3</h2>
                    <h2 className="text-2xl font-bold">Total Price: 100$</h2>
                    <button className="btn btn-accent">Pay</button>
                </div>

                <table className="table">
                    {/* head */}
                    <thead className="bg-yellow-600">
                        <tr>
                            <th>
                                SL
                            </th>
                            <th>Date & Time</th>
                            <th>Guest Number</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>


                    <tbody>

                        {
                             a.length > 0 ? 'gg' : <tr>
                                    <td colSpan="5">
                                        <h2 className="text-black text-xl text-center">No Bookings Made. Book Table from Reservation Page </h2>
                                    </td>
                                    </tr>
                        }

                    </tbody>

                </table>


            </div>

        </div>
    );
};

export default MyBookings;
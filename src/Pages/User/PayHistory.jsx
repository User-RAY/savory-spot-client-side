
const PayHistory = () => {
    return (
         <div className='w-full h-full'>

            <div className="w-[80%] h-full mx-auto flex items-center">

                <div className="w-full">

                    <h1 className="text-3xl text-center mb-12">PAYMENT</h1>
                    <form >
                        <div className="flex items-center gap-8">
                            <div className="form-control flex-1">
                                <input type="number" name='card' id='card' placeholder='Card number' className="input input-bordered py-8 w-full" />
                            </div>

                            <div className="form-control flex-1">
                                <input type="text" name='date' placeholder='MM/YY/CVC'  id='date' className="input input-bordered py-8 w-full"/>
                            </div>
                        </div>
                    
                        <div className="form-control mt-11 w-1/2 mx-auto">
                            <button type='submit' className="btn bg-[#570DF8] text-white w-full">Pay
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default PayHistory;
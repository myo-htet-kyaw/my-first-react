function Header(){
    const navname = [
        'Features',
        'Testimonials',
        'Pricing',
    ]
    return (
        <div className="w-full flex h-25 text-xs ">
            <div className="w-2/3 flex gap-16 mt-7 ms-20">
                <p className="text-base text-blue-500 font-medium ">TaxPal</p> 
                {/* <p className="pt-1.5">Features</p>
                <p className="pt-1.5">Testimonials</p>
                <p className="pt-1.5">Pricing</p> */}
                {
                    navname.map(name=>(
                        <p className="pt-1.5 hover:cursor-pointer">{name}</p>
                    ))
                }
            </div>
            <div className="w-1/3 flex gap-14 mt-7 ms-52">
                <p className="pt-1.5">Sign in</p>
                <button className="bg-blue-600 font-medium text-white rounded-2xl w-32 h-8">Get Started Today</button>
            </div>
        </div>
    )
}
export default Header
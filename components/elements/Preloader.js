export default function Preloader() {
    return (
        <>
            <div id="preloader" className='bg-black'>
                <div id="loader" className="loader">
                    <div className="loader-container">
                        <div className="loader-icon pt-2"><img src="/assets/img/logo/preloader.png" alt="Preloader" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

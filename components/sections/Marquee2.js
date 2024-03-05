import Link from 'next/link'

export default function Marquee2() {
    return (
        <>
            <div className="marquee__area-two bg-black">
                <div className="marquee__wrap">
                    
                    <div className="marquee__box">
                        <div data-hover="Marketing">Website</div>
                        <div data-hover="Finance Advisor">Design</div>
                        <div data-hover="Investment">Code</div>
                        <div data-hover="Target">Deploy</div>
                    </div>
                </div>
            </div>
        </>
    )
}

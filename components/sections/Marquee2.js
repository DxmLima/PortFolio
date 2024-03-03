import Link from 'next/link'

export default function Marquee2() {
    return (
        <>
            <div className="marquee__area-two bg-black">
                <div className="marquee__wrap">
                    <div className="marquee__box">
                        <Link data-hover="Marketing" href="/services-details">Website</Link>
                        <Link data-hover="Finance Advisor" href="/services-details">Design</Link>
                        <Link data-hover="Investment" href="/services-details">Code</Link>
                        <Link data-hover="Target" href="/services-details">Deploy</Link>
                    </div>
                    <div className="marquee__box">
                        <Link data-hover="Marketing" href="/services-details">Website</Link>
                        <Link data-hover="Finance Advisor" href="/services-details">Design</Link>
                        <Link data-hover="Investment" href="/services-details">Code</Link>
                        <Link data-hover="Target" href="/services-details">Deploy</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

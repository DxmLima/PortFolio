import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="navigation">
                <li className=" menu-item"><Link href="/">Work</Link>
                   
                </li>
              
                <li className="menu-item-"><Link href="/About-me">About</Link>
                   
                </li>
                <li className="menu-item"><Link href="/Resume">Resume</Link>
                   
                </li>
            </ul>
        </>
    )
}

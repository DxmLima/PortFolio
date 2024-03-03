import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="navigation">
                <li className=" menu-item"><Link href="#">Work</Link>
                   
                </li>
                <li className="menu-item"><Link href="#">Explore</Link>
                  
                </li>
                <li className="menu-item-"><Link href="#">About</Link>
                   
                </li>
                <li className="menu-item"><Link href="#">Resume</Link>
                   
                </li>
            </ul>
        </>
    )
}

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const NavLink: React.FC<{ url: string, title: string }> = (props) => {
    const path = usePathname()
    return (
        <Link href={props.url} key={props.title} className={`rounded p-1 ${path === props.url && "bg-black text-white"}`}>{props.title}</Link>

    )
}

export default NavLink
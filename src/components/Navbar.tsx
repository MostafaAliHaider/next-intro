"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navigation = [
    {
        label:"Home",
        href: "/",
    },
    {
        label:"Products",
        href: "products",
    },
]


const Navbar = () => {

    const pathname = usePathname()

    const checkActivePath = (path: string) => {
        return path === pathname
    }
  return(
    <nav className="mb-6 flex gap-2">
    {navigation.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className={checkActivePath(item.href) ? "underline" : ""}
      >
        {item.label}
      </Link>
    ))}
  </nav>
  )
}

export default Navbar
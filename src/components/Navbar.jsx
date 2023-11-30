"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { loading, cartItems } = useSelector((state) => state.cart);
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex justify-between items-center p-8 bg-black">
        <h6 className="text-xl font-semibold uppercase text-white">
          Ecomm-App
        </h6>
        <ul className="flex gap-5 text-white">
          <li className="custom-list-item">
            <Link href="/" className="link-names">
              Home
            </Link>
          </li>
          <li className="custom-list-item">
            <Link href="/cart" className="link-names">
              Cart
            </Link>
            {!loading && cartItems.length > 0 && pathname !== "/cart" && (
              <div className="caret"></div>
            )}
            <span className="cart-badge">
              {loading ? "" : cartItems.reduce((a, c) => a + c.qty, 0)}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

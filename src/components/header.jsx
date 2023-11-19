/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { getCookie } from "cookies-next";

function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false); // initiate isNavOpen state with false

  //cara ambil data dari cookie agar tidak hydrating component
  //harus dibikin state dulu dan ditampung datanya kedalam state

  const [user, setUser] = React.useState(null); //defaultnya adalah null

  // console.log(user);

  React.useEffect(() => {
    if (getCookie("user")) {
      //kalau get cookie user berhasil dan ada datanya

      setUser(JSON.parse(getCookie("user")));
      //set nilai user dengan data yang dijadikan json
      //karena didalam cookie data yang kita punya bentuknya adalah string
    }
  }, []);

  return (
    <>
      {/* header */}
      <nav className="container mx-auto mt-6  ">
        <header className="flex justify-between drop-shadow-md">
          <img
            className="px-[15px] md:px-[1px]"
            src="/logo_grape.png"
            alt="logo"
            style={{ height: "35px", width: "127px" }}
          />
          {user ? (
            <img
              src={user.photo}
              alt="sss"
              className="border h-[40px] w-[40px] rounded-full invisible md:visible"
            />
          ) : (
            <div className="invisible md:visible flex gap-3">
              <Link href={"/login"}>
                <button className="p-1 rounded border-4 btn-signin w-1/8">
                  Masuk
                </button>
              </Link>
              <Link href={"/signup"}>
                <button className="p-1 rounded border-4 btn-signup w-1/8">
                  Daftar
                </button>
              </Link>
            </div>
          )}
          <div className="MOBILE-MENU flex md:hidden ">
            <div
              className="HAMBURGER-ICON h-[50px] w-[50px] pr-4"
              onClick={() => setIsNavOpen((isFalse) => !isFalse)} // toggle isNavOpen state on click
            >
              {user ? (
                <img
                  src={user.photo}
                  alt=""
                  className="border h-[35px] w-[45px] rounded-full"
                />
              ) : (
                <img src="/ham.png" alt="" />
              )}
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-4 py-1"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-[#5E50A1]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <div className="container ">
                <div className="flex items-center justify-center pt-[15px] text-[#5E50A1]">
                  <Link href={"/"}>
                    <p>HOME</p>
                  </Link>
                </div>
                <div className="flex items-center justify-center pt-[15px] text-[#5E50A1]">
                  <Link href={"/login"}>
                    <p>Signin</p>
                  </Link>
                </div>
                <div className="flex items-center justify-center pt-[15px] text-[#5E50A1]">
                  <Link href={"/signup"}>
                    <p>Signup</p>
                  </Link>
                </div>
                <div className="flex items-center justify-center pt-[15px] text-[#5E50A1]">
                  <Link href={"/talent-list"}>
                    <p>Talent List</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </nav>
      {/* header */}
    </>
  );
}

export default Header;

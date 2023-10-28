import Link from "next/link";
import { type } from "os";
import React, { FC } from "react";

export const navItems = [
  { name: "Home", url: "/" },
  { name: "Courses", url: "/courses" },
  { name: "About", url: "/about" },
  { name: "Policy", url: "/policy" },
  { name: "FAQ", url: "/faq" },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItem: FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className='hidden 800px:flex'>
        {navItems &&
          navItems.map((item, index) => (
            <Link href={`${item.url}`} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[crimson]"
                    : " dark:text-white text-black"
                } text-[18px] px-6 font-Poppins font-[400]`}
              >
                {item.name}
              </span>
            </Link>
          ))}
      </div>
      {isMobile && (
        <div className='800px:hidden mt-5'>
          <div className='w-full text-center py-6'>
            <Link
              href={"/"}
              className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
            >
              LMS
            </Link>
          </div>
          {navItems &&
            navItems.map((item, index) => (
              <Link href={`${item.url}`} key={index} passHref>
                <span
                  className={`${
                    activeItem === index
                      ? "dark:text-[#37a39a] text-[crimson]"
                      : " dark:text-white text-black"
                  } block py-5 text-[18px] px-6 font-Poppins font-[400]`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
        </div>
      )}
    </>
  );
};

export default NavItem;

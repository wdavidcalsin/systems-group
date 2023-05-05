import Link from "next/link";
import React from "react";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

const listMenu = [
  { name: "inicio", slug: "/" },
  {
    name: "servicios",
    slug: "/servicios",
    subRoutes: [
      { name: "registrar dominio", slug: "/servicios/registrar-dominio" },
      { name: "web hosting", slug: "/servicios/web-hosting" },
      { name: "diseño web", slug: "/servicios/diseño-web" },
    ],
  },
  {
    name: "productos",
    slug: "/productos",
    subRoutes: [
      {
        name: "sistema de facturacion electronica",
        slug: "/productos/sistema-de-facturacion-electronica",
      },
      { name: "sistema de ventas", slug: "/productos/sistema-de-ventas" },
      {
        name: "sistema de gestion para hoteles",
        slug: "/productos/sistema-de-gestion-para-hoteles",
      },
    ],
  },
  { name: "clientes", slug: "/clientes" },
];

function Navbar() {
  return (
    <div className="h-20 bg-white w-full flex items-center justify-between px-10 text-[#0072CE] font-bold">
      <div className="flex items-center gap-9">
        <div className="">
          <Image width="35" height="35" src={"/logo-system-group.png"} alt="" />
        </div>
        <ul className="flex gap-6 uppercase items-center">
          {listMenu.map((item, index) => {
            if (item.subRoutes) {
              return (
                <Menu
                  as="div"
                  className="relative inline-block text-left"
                  key={index}
                >
                  <div>
                    <Menu.Button className="flex gap-0 items-center uppercase">
                      {item.name}
                      <FaChevronDown className="ml-2 -mr-1 h-3 w-3  hover:opacity-50" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        {item.subRoutes.map((subItem, subIndex) => {
                          return (
                            // <li key={subIndex}>
                            // <Link href={subItem.slug}>{subItem.name}</Link>
                            // </li>
                            <Menu.Item key={subIndex}>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize`}
                                >
                                  {active ? (
                                    <EditActiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <EditInactiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                  {subItem.name}
                                </button>
                              )}
                            </Menu.Item>
                          );
                        })}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              );
            } else {
              return (
                <li key={index}>
                  <Link href={item.slug}>{item.name}</Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="uppercase flex text-white">
        <Link href="/soporte" className="bg-[#0072CE] p-4">
          soporte
        </Link>
        <Link href="/empresa" className="bg-[#F1C400] p-4 text-black">
          empresa
        </Link>
      </div>
    </div>
  );
}

function EditInactiveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

export default Navbar;

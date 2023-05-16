import * as React from "react";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

const listMenu = [
  { name: "inicio", slug: "/" },
  {
    name: "servicios",
    slug: "/servicios",
    subRoutes: [
      { name: "registrar dominio", slug: "/servicios/registrar-dominio" },
      { name: "web hosting", slug: "/servicios/web-hosting" },
      { name: "diseño web", slug: "/servicios/desing-web" },
      {
        name: "desarrollo de software",
        slug: "/servicios/desarrollo-de-software",
      },
      {
        name: "firma digital",
        slug: "/servicios/firma-digital",
      },
      {
        name: "Audio Streaming con AutoDJ",
        slug: "/servicios/audio-streaming",
      },
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
      {
        name: "sistema de tramite documentario",
        slug: "/productos/sistema-de-tramite-documentario",
      },
    ],
  },
  {
    name: "clientes",
    slug: "/clientes",
    subRoutes: [
      {
        name: "agencia de viajes",
        slug: "/clientes/agencia-de-viajes",
      },
      { name: "hoteles", slug: "/clientes/hoteles" },
      {
        name: "instituciones",
        slug: "/clientes/instituciones",
      },
    ],
  },
];

function Navbar() {
  const router = useRouter();

  return (
    <div className="h-20 bg-[#051927] bg-opacity-50 w-full flex items-center justify-between px-20 text-white font-normal z-50 relative">
      <div className="flex items-center gap-16">
        <div className="">
          <Image width="35" height="35" src={"/logo-system-group.png"} alt="" />
        </div>
        <ul className="flex gap-6 capitalize items-center">
          {listMenu.map((item, index) => {
            if (item.subRoutes) {
              return (
                <Menu
                  as="div"
                  className="relative inline-block text-left z-50 "
                  key={index}
                >
                  <Box>
                    <Menu.Button
                      className={`flex gap-0 items-center capitalize  ${
                        item.subRoutes.find(
                          ({ slug }) => slug == router.pathname
                        )
                          ? "border-b-4 border-cyan-600 py-2 "
                          : ""
                      }  hover:text-cyan-600`}
                    >
                      {item.name}
                      <FaChevronDown className="ml-2 -mr-1 h-3 w-3  hover:opacity-50" />
                    </Menu.Button>
                  </Box>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-left">
                      <Box className="px-1 py-1 ">
                        {item.subRoutes.map((subItem, subIndex) => {
                          return (
                            <Menu.Item key={subIndex}>
                              {({ active }) => (
                                <Link
                                  href={subItem.slug}
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } w-full  rounded-md px-2 py-2 text-sm capitalize text-left flex items-center `}
                                >
                                  {subItem.name}
                                </Link>
                              )}
                            </Menu.Item>
                          );
                        })}
                      </Box>
                    </Menu.Items>
                  </Transition>
                </Menu>
              );
            } else {
              return (
                <li key={index}>
                  <Link
                    href={item.slug}
                    className={`${
                      router.pathname == item.slug
                        ? "border-b-4 border-cyan-600 py-2 "
                        : ""
                    }  hover:text-cyan-600`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="uppercase flex text-white">
        <Link href="#" className="bg-[#0072CE] p-4">
          soporte
        </Link>
        <Link href="#" className="bg-[#F1C400] p-4 text-black">
          empresa
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

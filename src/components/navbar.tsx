import * as React from "react";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiXCircle } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Box,
  Fade,
  ScaleFade,
  Slide,
  useDisclosure,
  Link as LinkChakra,
} from "@chakra-ui/react";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

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
      {
        name: "medios de comunicacion",
        slug: "/clientes/medios-de-comunicacion",
      },
      {
        name: "organizaciones",
        slug: "/clientes/organizaciones",
      },
      {
        name: "restaurantes",
        slug: "/clientes/restaurantes",
      },
    ],
  },
];

function Navbar() {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div className="h-20 bg-[#051927] bg-opacity-50 w-full flex items-center justify-between px-5 md:px-20 text-white font-normal z-30 relative">
      <div className="flex items-center gap-16">
        <div className="">
          <Link href={"/"}>
            <Image
              width="35"
              height="35"
              src={"/logo-system-group.png"}
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:block z-20">
          <ul className="flex gap-6 capitalize items-center ">
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
      </div>
      <div className="block lg:hidden text-3xl">
        <GiHamburgerMenu className="cursor-pointer" onClick={onToggle} />
      </div>
      {/* <div
        className={`transition-all delay-150 ease-out ${
          isOpen ? "left-0" : "-left-full"
        } fixed top-0  w-full  h-screen  z-50`}
      >
        <div className="h-full ">
          <div className="w-96 bg-white h-full px-4 relative">
            <div className="flex flex-col gap-6 text-black text-2xl pt-5">
              <div>
                <h1 className="text-center relative">Menu</h1>

                <FiXCircle
                  className="absolute top-3 right-3 cursor-pointer text-red-500"
                  onClick={onToggle}
                />
              </div>
              <ul className="flex gap-6 flex-col capitalize items-start ">
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
          </div>
        </div>
      </div> */}

      <div
        className={`transition-all delay-150 ease-out ${
          isOpen ? "left-0" : "-left-96"
        } fixed top-0 w-96 max-w-full  h-screen z-50 overflow-auto bg-white`}
      >
        <div className="w-full bg-white h-full px-4 relative">
          <div className="flex flex-col gap-6 text-black text-2xl pt-5">
            <div>
              <h1 className="text-center relative">Menu</h1>

              <FiXCircle
                className="absolute top-3 right-3 cursor-pointer text-red-500"
                onClick={onToggle}
              />
            </div>
            <ul className="flex gap-2 flex-col capitalize items-start w-full ">
              {listMenu.map((item, index) => {
                if (item.subRoutes) {
                  return (
                    <Menu
                      as="div"
                      className=" text-left z-50 w-full bg-white h-full relative"
                      key={index}
                    >
                      <Box className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                        {/* <Menu.Button
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
                        </Menu.Button> */}
                        <Disclosure>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 uppercase">
                                <span> {item.name}</span>
                                <ChevronUpIcon
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-purple-500`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
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
                                          onClick={onToggle}
                                        >
                                          {subItem.name}
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  );
                                })}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
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
                                      } w-full  rounded-md px-2 py-2 text-sm capitalize text-left flex items-center font-bold`}
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
                    <li key={index} className="p-2 w-full">
                      <Link
                        href={item.slug}
                        className={`${
                          router.pathname == item.slug ? " " : ""
                        } flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 uppercase `}
                        onClick={onToggle}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>

      <Fade
        in={isOpen}
        onClick={onToggle}
        className={` transition-all delay-700 ease-linear ${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0  w-full  h-screen  z-40 bg-black/60`}
      ></Fade>

      <div className="hidden lg:block">
        <div className="uppercase flex text-white">
          <Link href="#" className="bg-[#0072CE] p-4">
            soporte
          </Link>
          <Link href="/empresa" className="bg-[#F1C400] p-4 text-black">
            empresa
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

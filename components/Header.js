import React from 'react';
import { MenuIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { IoAlbumsSharp,IoAlbumsOutline } from "react-icons/io5";
import { FaLanguage,FaTheaterMasks } from "react-icons/fa";



function Header() {
  return (
    <div className="navbar-items">
      <div className=" flex items-center ">
        <div>
        <Menu
            as="div"
            className="menu-contain group"
          >
            <div>
              <Menu.Button className="menu-button">
              <MenuIcon className="h-[24px] w-[24px]  mr-2 items-center text-[#ffffffcc] " />
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
              <Menu.Items className="hamburger-menu">
                <div className="px-0 py-0 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item-2 group`}
                      >
                        {active ? (
                      <IoAlbumsSharp
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <IoAlbumsOutline
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                      <div>Channels</div>
                      </button>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item-2 group`}
                      >
                        {active ? (
                      <FaLanguage
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <FaLanguage
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                        
                       <div>Languages</div>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item-2 group`}
                      >
                        {active ? (
                      <FaTheaterMasks
                        className="w-5 h-5 mr-2 "
                        aria-hidden="true"
                      />
                    ) : (
                      <FaTheaterMasks
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                   <div>Genres</div>
                      </button>
                    )}
                  </Menu.Item>
                 
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
         
        </div>
        <div className="logo">
          <Link href={'/'} passHref>
            <a>
              <Image src="/disney-hotstar-logo.svg" height={72} width={115} />
            </a>
          </Link>
        </div>
        <div className="navbar-links">
          
          <Menu
            as="div"
            className="menu-contain group"
          >
            <div>
              <Menu.Button className="menu-button">
              TV
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
              <Menu.Items className="menu-items">
                <div className="px-0 py-0 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                       Other Shows
                      </button>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                       Hotstar Specials
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                      Quix
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                       Star Jalsha
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                       StarPlus
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                      Star Vijay 
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                      Star Bharat
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                      Asianet
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                      more... 
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu
            as="div"
            className="menu-contain group"
          >
            <div>
              <Menu.Button className="menu-button ">
              Movies
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
              <Menu.Items className="menu-items">
                <div className="px-0 py-0 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                      Hindi
                      </button>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Bengali
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Telugu
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Malayalam
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Tamil
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Marathi
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        English
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Kannada
                      </button>
                    )}
                  </Menu.Item>
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu
            as="div"
            className="menu-contain group"
          >
            <div>
              <Menu.Button className="menu-button ">
              Sport
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
              <Menu.Items className="menu-items-2">
                <div className="px-0 py-0 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Cricket
                      </button>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Kabaddi
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Football
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Hockey
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Formula E
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Tennis
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >American Football
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        eSports
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Formula 1
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Martial Arts
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Athletics
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Golf
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Wrestling
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Table Tennis
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-[#0b0d11] text-white'
                            : 'text-white bg-[#171f31]'
                        } menu-item`}
                      >
                        Khelo India
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <a className="group link-btn">
            <span>Disney+</span>
          </a>
         
          
          <a className="group link-btn">
            <Image src={'/images/kids.svg'} height={40} width={40} />
          </a>
        </div>
      </div>
      <div className=" flex justify-around items-center">
        <div className="search-box">
          <input
            type="text"
            className="Search-container"
            placeholder="Search"
          ></input>
          <SearchIcon className="w-6 w-6 ml-[-12px] text-gray-400" />
        </div>
        <button className="text-white font-medium text-xs m-4 bg-blue-600 p-1.5 px-4 rounded">
          <span>SUBSCRIBE</span>
        </button>
        <button className="text-white font-medium text-xs m-4">
          <span>LOGIN</span>
        </button>
      </div>
    </div>
  );
}

export default Header;

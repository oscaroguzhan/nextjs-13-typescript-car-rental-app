"use client";
import { SearchManufacturerProps } from "@/types"
import React, { useState, Fragment } from "react"
import Image from "next/image";
import { Combobox, Transition } from '@headlessui/react'
import { manufacturers } from "@/constants";
const SearchCarManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers = 
  // if there is no query return all manufacturers otherwise return the given query and remove all white spaces
    query === ""
      ? manufacturers 
        : manufacturers.filter((manufacturer) => (
          manufacturer.toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, "")
        )))
  return (
    <div>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full bg-slate-200 rounded-md">
          <Combobox.Button className="absolute top-[8px]">
            <Image
              src="/tesla-motors-logo-svg-vector.svg"
              alt="car logo"
              width={24}
              height={24}
              className="ml-4 object-contain"
            />
          </Combobox.Button>
          <Combobox.Input className="search-manufacturer__input" 
            placeholder="Tesla" 
            displayValue={(manufacturer: string) => manufacturer} 
            onChange={(e) => { setQuery(e.target.value)}}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => {setQuery('')}}
          >
            <Combobox.Options>
              {
                filteredManufacturers.map((manufacturer) => (
                  <Combobox.Option key={manufacturer} value={manufacturer} 
                  className={({ active }) =>
                  `relative search-manufacturer__option ${
                    active ? "bg-[var(--purple)] text-white" : "text-gray-900"
                  }`
                } >{manufacturer}</Combobox.Option>
                ))
              }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchCarManufacturer
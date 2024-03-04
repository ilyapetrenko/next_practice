"use client"

import {useEffect, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export default function Filter() {
    const [isFilterVisible, setFilterVisible] = useState(false);
    const [selectedStatuses, setSelectedStatuses] = useState([] as string[]);

    useEffect(() => {
        createPageURL(selectedStatuses)
    },[selectedStatuses])

    const { replace } = useRouter();

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createPageURL = (selectedStatuses: string[]) => {
        const params = new URLSearchParams(searchParams);
        if (selectedStatuses.length > 0) {
            params.set('status', selectedStatuses.join(','));
        } else {
            params.delete('status');
        }
        replace(`${pathname}?${params.toString()}`);
    };

    const handleFilterButtonClick = () => {
        setFilterVisible(!isFilterVisible);
    };

    const handleStatusChange = (status: string) => {
        const updatedStatuses = [...selectedStatuses];

        if (updatedStatuses.includes(status)) {
            updatedStatuses.splice(updatedStatuses.indexOf(status), 1);
        } else {
            updatedStatuses.push(status);
        }

        setSelectedStatuses(updatedStatuses);
    };
    return (
        <div className="flex flex-col">
            <button
                id="filterDropdownButton"
                data-dropdown-toggle="filterDropdown"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
                onClick={handleFilterButtonClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-4 mr-2 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clipRule="evenodd"
                    />
                </svg>
                Filter
                <svg
                    className="-mr-1 ml-1.5 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                </svg>
            </button>
            <div
                id="filterDropdown"
                className={`absolute z-10 ${isFilterVisible ? '' : 'hidden'} mt-10 p-3 bg-white rounded-lg shadow dark:bg-gray-700`}
            >
            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Status
            </h6>
            <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                <li className="flex items-center">
                    <input id="alive"
                           type="checkbox"
                           value=""
                           checked={selectedStatuses.includes('alive')}
                           onChange={() => handleStatusChange('alive')}
                           className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                    <label htmlFor="apple"
                           className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                        Alive
                    </label>
                </li>
                <li className="flex items-center">
                    <input id="dead"
                           type="checkbox"
                           value=""
                           checked={selectedStatuses.includes('dead')}
                           onChange={() => handleStatusChange('dead')}
                           className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                    <label htmlFor="fitbit"
                           className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                        Dead
                    </label>
                </li>
                <li className="flex items-center">
                    <input id="unknown"
                           type="checkbox"
                           value=""
                           checked={selectedStatuses.includes('unknown')}
                           onChange={() => handleStatusChange('unknown')}
                           className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                    <label htmlFor="dell"
                           className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                        Unknown
                    </label>
                </li>
            </ul>
        </div>
        </div>
    )
}

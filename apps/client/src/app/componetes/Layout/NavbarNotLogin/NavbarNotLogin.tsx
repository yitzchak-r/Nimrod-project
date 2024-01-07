import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavbarNotLogin() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthX33BnOki7qAbwCHiQ3lgksGOU4DoeJgCA&usqp=CAU"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="http://localhost:4200/Login"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Log in/sign Up
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
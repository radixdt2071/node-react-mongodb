import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    {/* <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </a>
                    </div> */}
                    <div>
                        <ul className="flex -mx-4">
                            {/* <li className="text-sm font-semibold px-4 leading-6 text-gray-900">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-sm font-semibold px-4 leading-6 text-gray-900">
                                <Link to="/blogs">Blogs</Link>
                            </li> */}
                            {/* <li className="text-sm font-semibold px-4 leading-6 text-gray-900">
                                <Link to="/login">Login</Link>
                            </li> */}
                            {/* <li className="text-sm font-semibold px-4 leading-6 text-gray-900">
                                <Link to="/contact">Contact</Link>
                            </li> */}
                            <li className="text-sm font-semibold px-4 leading-6 text-gray-900">
                                <Link to="/tasks">Task List</Link>
                            </li>
                            <li className="text-sm font-semibold px-4 leading-6 text-gray-900">
                                <Link to="/tasks/create">Create Task</Link>
                            </li>
                            <li className="text-sm font-semibold px-4 leading-6 text-gray-900">
                                <Link to="/tasks/edit/:id">Edit Task</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex lg:flex-1 lg:justify-end">
                        <Link to="/login" className="text-sm font-semibold px-4 leading-6 text-gray-900">Login<span aria-hidden="true" className="ml-2">&rarr;</span></Link>
                    </div>
                </nav>

            </header>

            <Outlet />
        </>
    )
};

export default Layout;
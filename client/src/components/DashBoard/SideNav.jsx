import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation().pathname;

  return (
    <aside
      className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0"
      aria-expanded="false"
    >
      <div className="h-19">
        <i
          className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"
          // sidenav-close
        ></i>
        <a
          className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700"
          target="_blank"
        >
          <div className="flex relative right-4">
            <Link
              to="/home"
              className="bg-blue-500 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 ease-linear transition-all duration-150 w-24 text-center"
            >
              Volver
            </Link>
          </div>
          <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand"></span>
        </a>
      </div>

      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

      <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          <li className="mt-0.5 w-full">
            <a
              className={`${
                location === "/dashboard" && "bg-blue-500/13"
              } py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors`}
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-blue-500 ni ni-tv-2"></i>
              </div>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease"></span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a
              className={`${
                location === "/dashboard/clientes" && "bg-blue-500/13"
              } dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-circle-08"></i>
              </div>
              <NavLink to="/dashboard/clientes">Clientes</NavLink>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease"></span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a
              className={`${
                location === "/dashboard/publicaciones" && "bg-blue-500/13"
              } dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-emerald-500 ni ni-credit-card"></i>
              </div>
              <Link to="/dashboard/publicaciones">Publicaciones</Link>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease"></span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a
              className={`${
                location === "/dashboard/calendario" && "bg-blue-500/13"
              } dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-black ni ni-calendar-grid-58"></i>
              </div>
              <Link to="/dashboard/calendario">Calendario</Link>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease"></span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a
              className={`${
                location === "/dashboard/pagos" && "bg-blue-500/13"
              } dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
            >
              <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <img
                  src="https://res.cloudinary.com/dpxucxgwg/image/upload/v1679883821/mp-logo_vsqott.png"
                  alt="mp img"
                />
              </div>
              <Link className="relative right-2" to="/dashboard/pagos">
                Pagos
              </Link>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease"></span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a
              className={`${
                location === "/dashboard/actividades" && "bg-blue-500/13"
              } dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-indigo-500 ni ni-watch-time"></i>
              </div>
              <Link to="/dashboard/actividades">Actividades</Link>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease"></span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a
              className={`${
                location === "/dashboard/entrenadores" && "bg-blue-500/13"
              } dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-red-500 ni ni-user-run"></i>
              </div>
              <Link to="/dashboard/entrenadores">Entrenadores</Link>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease"></span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a
              className={`${
                location === "/dashboard/testimonios" && "bg-blue-500/13"
              } dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-amber-500 ni ni-bullet-list-67"></i>
              </div>
              <Link to="/dashboard/testimonios">Testimonios</Link>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease"></span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a
              className={`${
                location === "/dashboard/planes" && "bg-blue-500/13"
              } dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-slate-700 ni ni-bag-17"></i>
              </div>
              <Link to="/dashboard/planes">Planes</Link>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease"></span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
					<li className='mt-0.5 w-full'>
						<a
							className={`${
								location === '/dashboard/planes' && 'bg-blue-500/13'
							} dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
						>
							<div className='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
							  <i className="fa fa-plane" aria-hidden="true"></i>
							</div>
							<Link to='/dashboard/planes'>Planes</Link>
							<span className='ml-1 duration-300 opacity-100 pointer-events-none ease'></span>
						</a>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default SideNav;

import { NavLink, Outlet } from "react-router-dom"


function App() {

  return (
    <>

      <div>
        <div>
          <h1 className="text-3xl font-bold text-center">
            Hello world!
          </h1>
          <NavLink
            to={`/feed`}
            className={({ isActive }) =>
              isActive
                ? ""
                  : "bg-lime-700 text-white px-4 py-2 rounded-md ml-20 mt-10"
            }
          >
            Show Feed
          </NavLink>
        </div>
        <div>
          <Outlet>

          </Outlet>
        </div>
      </div>

    </>
  )
}

export default App

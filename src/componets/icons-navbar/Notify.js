import * as React from "react"
const Notify = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={25}
    fill="none"
    {...props}
  >
    <path className="AspectFill"
      fill="#fff"
      d="m21.062 17.401-.267-.324c-1.202-1.454-1.93-2.331-1.93-6.448 0-2.13-.509-3.88-1.514-5.19-.74-.97-1.742-1.704-3.062-2.247a.165.165 0 0 1-.045-.037C13.769 1.565 12.47.5 11.004.5 9.539.5 8.24 1.565 7.764 3.153a.17.17 0 0 1-.043.036C4.64 4.457 3.143 6.89 3.143 10.628c0 4.118-.726 4.995-1.93 6.448l-.267.323a1.921 1.921 0 0 0-.254 2.056c.337.71 1.056 1.151 1.876 1.151h16.878c.816 0 1.53-.44 1.868-1.147a1.921 1.921 0 0 0-.252-2.058ZM11.004 24.98a4.375 4.375 0 0 0 3.849-2.302.22.22 0 0 0-.193-.32H7.35a.218.218 0 0 0-.22.212.219.219 0 0 0 .026.108 4.374 4.374 0 0 0 3.848 2.302Z"
    />
  </svg>
)
export default Notify
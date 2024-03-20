import * as React from "react"
const Fbicon = (props) => (
  <div id="networks-icons">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M15.36 0H.64A.64.64 0 0 0 0 .64v14.72c0 .354.286.64.64.64h14.72a.64.64 0 0 0 .64-.64V.64a.64.64 0 0 0-.64-.64Zm-1.848 4.67h-1.278c-1.002 0-1.196.476-1.196 1.176v1.542h2.392l-.312 2.414h-2.08V16H8.544V9.804H6.458V7.388h2.086v-1.78c0-2.066 1.262-3.192 3.106-3.192.884 0 1.642.066 1.864.096V4.67h-.002Z"
      opacity={0.5}
    />
  </svg>
  </div>
)
export default Fbicon

import React, { useRef } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function HeaderLink({
    children,
    dropdown,
    className,
    isDropdownActive,
    index,
    setActiveDropdownIdx,
}) {    
  const dropdownToggle = useRef();

  //const [isOpen, setIsOpen] = useState(false);

  // document.addEventListener("click", e => {
  //     e.stopImmediatePropagation()
  //     console.log(e.composedPath().includes(dropdownToggle.current))
  //     const isIn = e.composedPath().includes(dropdownToggle.current)

  //     if (isIn) {
  //         setIsOpen(true)
  //     }else {
  //         setIsOpen(false)
  //     }
  //     //console.log(dropdownToggle)
  // })
  /* const control = e => {
        if(!dropdownToggle.current.contains(e.target)) {
            setIsOpen(false)
            console.log(dropdownToggle.current)
        }    
    }

    useEffect(() => {

        document.addEventListener("click",control)

        return() => {
            document.removeEventListener("click",control)
        }
    }) */

    return (
        <div className="relative">
        <div
            className={`relative flex gap-3 max-[1440px]:gap-2 items-center cursor-pointer text-[20px] max-[1530px]:text-[18px] max-[1440px]:text-[16px] max-[1200px]:text-[14px] select-none ${className}`}
            onClick={() => setActiveDropdownIdx(isDropdownActive ? null : index)}
        >
            {children}
            {dropdown && <HiChevronDown strokeWidth="1" className="text-[16px]" />}
        </div>
        {isDropdownActive && dropdown && (
            <div
            ref={dropdownToggle}
            className="absolute border rounded-lg bg-[#14141F] px-4 py-3 z-20 translate-y-4 shadow-lg max-lg:border-0"
            >

                <ul className="flex flex-col gap-1">
                    <li>
                    <Link to="#">Dropdown</Link>
                    </li>
                    <li>
                    <Link to="#">Dropdown</Link>
                    </li>
                    <li>
                    <Link to="#">Dropdown</Link>
                    </li>
                </ul>
                
            </div>
        )}
        </div>
    );
}

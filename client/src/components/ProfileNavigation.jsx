import { useState } from "react"


const ProfileNavigation = () => {
    const [active, setActive] = useState(0);
    const liStyles = "pb-6 text-xl relative text-primary hover:cursor-pointer hover:text-primary-dark after:w-full after:h-[2px] after:bg-primary after:absolute after:top-full after:left-0 after:content-[''] after:transition-transform after:scale-x-0 hover:after:scale-x-100"
  return (
    <ul className="border-b-secondary border-b-2 pl-7 flex justify-around my-24">
        <li className={`${liStyles} ${active === 0 && "after:scale-x-100"}`} onClick={() => setActive(0)}>Personal information</li>
        <li className={`${liStyles} ${active === 1 && "after:scale-x-100"}`} onClick={() => setActive(1)}>Orders</li>
        <li className={`${liStyles} ${active === 2 && "after:scale-x-100"}`} onClick={() => setActive(2)}>Logout</li>
    </ul>
  )
}
export default ProfileNavigation
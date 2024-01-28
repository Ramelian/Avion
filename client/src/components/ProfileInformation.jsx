// ProfileInformation.jsx:
import { useState } from "react";
import styles from "../style";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import { MdLocationPin, MdOutlineDateRange  } from "react-icons/md";
import { FaGenderless } from "react-icons/fa";


const ProfileInformation = () => {
  const [profile, setProfile] = useState({
    email: "gregre",
    password: "gregr",
    firstName: "gregre",
    secondName: "greger",
    address: "gregger 33",
    phone: "4214214",
    dateOfBirth: "25-10-2003",
    gender: "male",
  });

  const gridContainerStyle = "grid grid-cols-2 gap-x-32 gap-y-4 items-center";
  const gridItemStyle = "flex items-center text-xl text-primary-dark";
  const gridValueStyle = "justify-self-end text-xl text-primary-dark";

  const [editMode, setEditMode] = useState(false);
  const [tempProfile, setTempProfile] = useState({ ...profile });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfile((prevTempProfile) => ({
      ...prevTempProfile,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setTempProfile({ ...profile });
    setEditMode(true);
  };

  const handleCancel = () => {
    setTempProfile({ ...profile });
    setEditMode(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile({ ...tempProfile });
    setEditMode(false);
    // TODO: Send the updated information to the server or update your state management system
  };

  return (
    <div className="mb-32 flex justify-center">
      {editMode ? (
        <form onSubmit={handleSave} className="p-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={tempProfile.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={tempProfile.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={tempProfile.firstName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="secondName"
              className="block text-sm font-medium text-gray-700"
            >
              Second Name
            </label>
            <input
              type="text"
              id="secondName"
              name="secondName"
              value={tempProfile.secondName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={tempProfile.address}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={tempProfile.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={tempProfile.dateOfBirth}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={tempProfile.gender}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        

<div className={`p-4 ${gridContainerStyle}`}>
  {/* Display the profile information here */}
  <div className={gridItemStyle}>
    <AiOutlineMail /> <span>Email:</span>
  </div>
  <div className={gridValueStyle}>{profile.email}</div>

  <div className={gridItemStyle}>
    <AiOutlineUser /> <span>First Name:</span>
  </div>
  <div className={gridValueStyle}>{profile.firstName}</div>

  {/* ... Other profile information displayed here */}
  <div className={gridItemStyle}>
    <AiOutlineUser /> <span>Second Name:</span>
  </div>
  <div className={gridValueStyle}>{profile.secondName}</div>

  <div className={gridItemStyle}>
    <MdLocationPin /> <span>Address:</span>
  </div>
  <div className={gridValueStyle}>{profile.address}</div>

  <div className={gridItemStyle}>
    <AiOutlinePhone /> <span>Phone:</span>
  </div>
  <div className={gridValueStyle}>{profile.phone}</div>

  <div className={gridItemStyle}>
    <MdOutlineDateRange /> <span>Date of Birth:</span>
  </div>
  <div className={gridValueStyle}>{profile.dateOfBirth}</div>

  <div className={gridItemStyle}>
    <FaGenderless /> <span>Gender: </span>
  </div>
  <div className={gridValueStyle}>{profile.gender}</div>

  {/* Button to enable edit mode */}
  <div className="col-span-2">
    <button
      onClick={handleEdit}
      className={`!w-full self-center ${styles.primaryDark} ${styles.button}`}
    >
      Edit
    </button>
  </div>
</div>

      )}
    </div>
  );
};

export default ProfileInformation;

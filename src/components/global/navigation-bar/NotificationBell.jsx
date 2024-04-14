"use client";
import { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";

const NotificationBell = () => {
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotification(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={notificationRef}>
      <button
        onClick={() => setShowNotification(!showNotification)}
        className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-2 inline-block"
      >
        <FaBell className="size-6 text-primary" />
      </button>
      {showNotification && (
        <div className="absolute right-0 top-full mt-2 w-96 rounded-md dark:bg-body bg-white p-2 z-10 shadow-lg border border-primary">
          <p className="text-center my-10">No notification available!</p>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;

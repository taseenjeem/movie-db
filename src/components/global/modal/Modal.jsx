"use client";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={() => router.back()}
      className="border-2 border-primary flex flex-col max-w-[90vw] p-10 w-full rounded-md dark:bg-opacity-95 dark:bg-body bg-white dark:text-white text-dark relative"
    >
      <button
        onClick={() => router.back()}
        className="flex justify-center items-center rounded-full absolute top-0 right-0"
      >
        <IoMdCloseCircle className="text-primary size-10" />
      </button>
      {children}
    </dialog>,
    document.getElementById("modal-content")
  );
};

export default Modal;

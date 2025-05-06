import { X } from "lucide-react";
import Image from "next/image";

import React from "react";

function ViewImageModal({
  closeModal,
  selectedImage,
}: Readonly<{
  closeModal: () => void;
  selectedImage: string;
}>) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 bg-gray-100 p-2 rounded-full transition duration-200"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <Image
          src={selectedImage}
          alt="Selected"
          width={500}
          height={500}
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  );
}

export default ViewImageModal;

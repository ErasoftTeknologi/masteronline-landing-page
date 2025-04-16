/* eslint-disable @next/next/no-img-element */

import { IMAGE_BASEURL } from "@/app/config";
import classNames from "classnames";
import { HTMLProps, useId } from "react";

type InputProps = HTMLProps<HTMLInputElement>;

function Input(props: InputProps) {
  const { className, id, placeholder, ...otherProps } = props;
  const inputId = useId();

  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className={classNames(
          "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-paprika-900 peer",
          className
        )}
        id={id || inputId}
        {...otherProps}
      />
      <label
        htmlFor={inputId}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-paprika-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {placeholder}
      </label>
    </div>
  );
}
export default function Registration() {
  return (
    <div className="bg-neutral-100 text-black">
      <div className="container mx-auto px-8 py-8">
        <div className="rounded-lg shadow-lg grid grid-cols-12 bg-white overflow-hidden">
          <div className="col-span-7 p-8">
            <div className="font-bold text-2xl">Daftar Sekarang</div>
            <div>
              Tulis data diri anda dan tim kami akan segera menghubungi anda.
            </div>
            <div className="py-12 space-y-4">
              <Input placeholder="Nama" />
              <Input placeholder="Email" />
              <Input placeholder="No. HP" />
              <Input placeholder="Kode Referal Pilihan" />
            </div>
            <div>
              Dengan menekan Daftar, maka saya telah menkonfirmasi untuk
              menyetujui Syarat dan Ketentuan yang berlaku
            </div>
            <div>
              <button>DAFTAR</button>
            </div>
          </div>
          <div className="col-span-5 relative">
            <img
              src={`${IMAGE_BASEURL}/images/handshake.png`}
              alt="partner"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

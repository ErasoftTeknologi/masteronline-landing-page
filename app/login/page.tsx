/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import AuthLayout from "@/components/AuthLayout";
import Input from "@/components/Input";
import { IMAGE_BASEURL } from "../config";

export default function Login() {
  return (
    <AuthLayout contentWrapperClassName="flex flex-col justify-center">
      <div className="p-4 md:p-8">
        <div className="container max-w-[800px] mx-auto flex flex-col md:flex-row bg-paprika-900 shadow-lg">
          <div className="h-36 md:h-auto w-full md:w-1/3 relative">
            <img
              src={`${IMAGE_BASEURL}/images/fingerprint.svg`}
              alt=""
              className="absolute w-[120%] h-[120%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            />
            <a
              className="block absolute w-full left-0 top-1/2 transform -translate-y-1/2 px-16 text-center"
              href="/"
            >
              <img
                src={`${IMAGE_BASEURL}/images/masteronline-logo-white.png`}
                alt=""
                className="w-full max-w-[200px] inline-block"
              />
            </a>
          </div>
          <div className="w-full md:w-2/3 flex flex-col items-start justify-center gap-4 md:gap-8 p-4 md:p-8 lg:p-16 relative overflow-hidden bg-white text-black">
            <div className="flex flex-col items-start justify-center gap-2 self-stretch w-full relative flex-none">
              <div className="relative w-fit font-bold text-2xl">
                Masuk Ke Master Online
              </div>
              <p className="relative self-stretch text-sm">
                Untuk keamanan yang lebih terjaga, jangan pernah memberi tahu
                password anda kepada siapapun.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-8 self-stretch w-full relative flex-none">
              <div className="flex flex-col items-start justify-center gap-2 self-stretch w-full relative flex-none">
                <Input placeholder="Email" wrapperClassName="w-full" />
                <Input
                  type="password"
                  placeholder="Password"
                  wrapperClassName="w-full"
                />
              </div>
              <p className="relative self-stretch font-normal text-sm">
                Selalu ganti password anda secara berkala. Gunakan password yang
                sulit di tebak. Jangan gunakan nama, tanggal lahir, atau kata
                yang mudah di tebak.
              </p>
            </div>
            <div className="flex justify-between w-full gap-2 md:gap-4 text-xs md:text-sm">
              <div className="flex-1 flex flex-col items-start gap-1 self-stretch w-full relative">
                <div className="font-medium">Belum punya akun?</div>
                <a
                  className="relative w-fit font-bold text-pink-800"
                  href="/register"
                >
                  Daftar Sekarang →
                </a>
              </div>
              <div className="flex-1 flex flex-col items-end gap-1 self-stretch w-full relative text-right">
                <div className="font-medium">Lupa password?</div>
                <a className="relative w-fit font-bold text-pink-800 cursor-pointer">
                  Reset Password di Sini
                </a>
              </div>
            </div>
            <button className="btn btn-primary btn-sm">Login</button>
          </div>
        </div>
      </div>
      <dialog id="forgotPasswordModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Lupa Password</h3>
          <form className="w-full">
            <div className="flex flex-col items-start justify-center gap-8 self-stretch w-full relative flex-none">
              <p className="relative self-stretch font-normal text-sm">
                Password baru Anda akan dikirimkan ke email
              </p>
              <div className="flex flex-col items-start justify-center gap-2 self-stretch w-full relative flex-none">
                <div className="relative w-full">
                  <input
                    placeholder="Email"
                    id="EmailForgotPassword"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                  />
                  <label
                    htmlFor="EmailForgotPassword"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-pink-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Email
                  </label>
                </div>
              </div>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <div className="btn btn-primary" id="btn-submit-reset-password">
                Kirim Ulang
              </div>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </AuthLayout>
  );
}

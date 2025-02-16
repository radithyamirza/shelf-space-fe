import { Link } from "react-router"

const LoginPage = () => {
  return (
    <div className="min-h-screen text-[#252422] bg-[#f5f5f5] px-4 md:px-12">
      <h2 className="text-center font-semibold pt-8 md:text-2xl w-full max-w-xl mx-auto">
        Login
      </h2>

      <form className="mt-10 max-w-xl mx-auto justify-center items-center">
        <div className="flex flex-col w-full space-y-5">
          <div className="space-y-5">
            <label className="md:text-lg">Username :</label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
            />
          </div>

          <div className="space-y-5">
            <label className="md:text-lg">Password :</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mb-10 w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
            />
          </div>
        </div>
        <button className="mb-5 w-full bg-[#403D39] text-[#FFFCF2] py-2 font-medium rounded-lg">Submit</button>
        <p className="text-center">Don't have an account? 
          <Link to={"/sign-up"} className="text-[#944424]"> Sign up</Link></p>
      </form>
    </div>
  )
}

export default LoginPage
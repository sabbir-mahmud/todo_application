import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import useSocial from "../../hooks/useSocial";

const Login = () => {
  const handleLogin = useLogin();
  const { handleGoogleSignIn } = useSocial();
  const googleSignIn = () => {
    handleGoogleSignIn();
  };
  return (
    <div className="container mx-auto mt-14 mb-24">
      <Helmet>
        <title>login</title>
      </Helmet>
      <div className="rounded-lg py-14">
        <div className="w-3/4 mx-auto card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
          <div className="title">
            <h3 className="text-center pt-5 text-4xl font-bold text-primary">
              Log in to your account!
            </h3>
          </div>
          <form onSubmit={handleLogin}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Create a account
                  </Link>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="login"
                />
              </div>
            </div>
          </form>
          <button className="btn btn-primary mx-8 my-2" onClick={googleSignIn}>
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

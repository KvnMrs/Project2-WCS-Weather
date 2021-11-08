import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../services/Context';
import tour from '../assets/tour-bretagne.jpg';

const Signup = () => {
  const background = `(${tour})`;
  const url = 'url';
  const { signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleSignup(e) {
    e.preventDefault();
    const { error } = await signUp({ email, password });
    if (error) {
      alert('An error occured, please verify your credentials and try again.');
    } else if (password.length <= 5) {
      alert('Your password must be at least 6 characters long.');
    } else {
      history.push('/welcome');
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="relative flex flex-col py-24 justify-center items-center bg-gray-50">
          <form className="grid grid-cols-1 w-auto px-6">
            <h1 className="text-left text-4xl tracking-tight text-gray-800 font-bold">
              Create your account
            </h1>
            <p className="text-gray-500 font-normal text-xl pt-2">
              and stay updated of the air quality in your campus !
            </p>
            <label className="text-gray-800 pt-14">
              Email address
              <input
                type="email"
                placeholder="exemple@mail.com"
                className="mt-1
                    block
                    w-full
                    py-3
                    px-4
                    rounded-md
                    border
                    border-gray-300
                    shadow-sm
                    transition-all
                    transition-duration-200
                    ease-in-out
                    outline-none
                    focus:border-dark_wild_red"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="text-gray-800 pt-6">
              Password
              <input
                type="password"
                placeholder="••••••••••••"
                className="mt-1
                    block
                    w-full
                    py-3
                    px-4
                    rounded-md
                    border
                    border-gray-300
                    shadow-sm
                    transition-all
                    transition-duration-200
                    ease-in-out
                    outline-none
                    focus:border-dark_wild_red"
                onChange={(e) => setPassword(e.target.value)}
              />
              {password.length < 6 && password.length >= 1 ? (
                <p className="mt-4 text-xs text-yellow-600">
                  Your password must be at least 6 characters long.
                </p>
              ) : null}
            </label>
            <label className="mt-6">
              <input type="checkbox" />
              <span className="ml-2 text-sm text-gray-600">
                You do accept our Terms and Conditions.
                <br />
                We promise not to sell your datas.
              </span>
            </label>
            <button
              type="submit"
              className="px-4 py-4 bg-wild_red rounded-md font-bold tracking-wider text-white text-sm uppercase mt-8 hover:bg-dark_wild_red transition-all transition-duration-150 ease-in-out"
              onClick={handleSignup}
            >
              Create your account
            </button>
            <div className="flex justify-center">
              <span className="mt-9 ml-0 text-center text-sm text-gray-600">
                Already a member ?
                <br />
                <Link to="/login">
                  <span className="text-center text-sm text-gray-600 underline hover:text-dark_wild_red">
                    Log in here
                  </span>
                </Link>
              </span>
            </div>
          </form>
        </div>
        <div
          className="hidden h-full bg-cover bg-center lg:flex lg:flex-col lg:h-screen"
          // eslint-disable-next-line no-undef
          style={{ backgroundImage: url + background }}
        />
      </div>
    </motion.div>  

  );
};

export default Signup;

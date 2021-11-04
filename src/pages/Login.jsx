/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, useHistory } from 'react-router-dom';
import elephant from '../assets/elephant.jpg';
import { useAuth } from '../services/Context';

const Login = () => {
  const background = `(${elephant})`;
  const url = 'url';

  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    const { error } = await signIn({ email, password });
    if (error) {
      alert('An error occured, please verify your credentials and try again.');
    } else {
      history.push('/home');
    }
  }

  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return (
    <animated.div
      className="grid grid-cols-1 lg:grid-cols-2 h-screen"
      style={fade}
    >
      <div className="relative flex flex-col py-24 justify-center items-center bg-gray-50">
        <form className="grid grid-cols-1 w-auto">
          <h1 className="text-left text-4xl tracking-tight text-gray-800 font-bold">
            Login to your account
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
                    focus:border-dark_wild_red
                    "
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
          </label>

          <button
            onClick={handleLogin}
            type="submit"
            className="px-4 py-4 bg-wild_red rounded-md font-bold tracking-wider text-white text-sm uppercase mt-8 hover:bg-dark_wild_red transition-all transition-duration-150 ease-in-out"
          >
            Connect to account
          </button>
          <div className="flex justify-center">
            <span className="mt-9 ml-0 text-center text-sm text-gray-600">
              Not a member already ?
              <br />
              <Link to="/signup">
                <span className="text-center text-sm text-gray-600 underline hover:text-dark_wild_red">
                  Create account here
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
    </animated.div>
  );
};

export default Login;

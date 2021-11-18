import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../services/Context';

// eslint-disable-next-line arrow-body-style
function UserWelcomemsg() {
  // Singout functions and states
  const { signOut } = useAuth();
  const history = useHistory();

  // Singout function
  async function handleSingout() {
    const { error } = await signOut();
    if (error) {
      alert('An error occured, please verify your credentials and try again.');
    } else {
      localStorage.clear();
      history.push('/');
    }
  }
  return (
    <div>
      <section className="grid grid-rows-1 grid-cols-2">
        <h1 className=" text-center mt-12 sm:mt-0 sm:text-left text-3xl font-semibold leading-none tracking-tighter text-neutral-600 pl-2 pt-5">
          Hello, Wilder !
        </h1>
        <button type="submit" onClick={handleSingout} className="bg-wild_red hover:bg-dark_wild_red rounded-lg text-white w-24 h-8 justify-self-end self-center">log out</button>
      </section>
    </div>
  );
}

export default UserWelcomemsg;

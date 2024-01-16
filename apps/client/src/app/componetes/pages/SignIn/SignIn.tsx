import styles from './signIn.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import tRPCclient from '../../../utils/tRPC';
import { useState } from 'react';

export interface HelloProps {}

interface FormDataSignIn {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export function SignIn(props: HelloProps) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormDataSignIn>();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const hello = tRPCclient.users.SignIn.mutate;

  const togglePasswordVisibility = (field: 'password' | 'passwordConfirmation') => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'passwordConfirmation') {
      setShowPasswordConfirmation(!showPasswordConfirmation);
    }
  };

  const handleSignIn = async (data: FormDataSignIn) => {
    try {
      if (data.password !== data.passwordConfirmation) {
        console.error('הסיסמה ואימות הסיסמה אינם תואמים');
        // Display error message to the user
        alert('הסיסמה ואימות הסיסמה אינם תואמים');
        return;
      }

      if (!isValidEmail(data.email) || !isValidPassword(data.password)) {
        console.error('אימייל או סיסמה לא תקינים');
        // Display error message to the user
        alert('אימייל או סיסמה לא תקינים');
        return;
      }

      const isEmailExists = await checkEmailExistence(data.email);
      if (isEmailExists) {
        console.error('האימייל כבר קיים במערכת');
        // Display error message to the user
        alert('האימייל כבר קיים במערכת');
        return;
      }

      const test = await hello({ email: data.email, password: data.password });
      console.log(test);

      // Redirect to the login page after successful registration
      navigate('/login');

    } catch (error) {
      console.error("שגיאה במהלך התחברות:", error);
      // Display a generic error message to the user
      alert("שגיאה במהלך התחברות");
    }
  };

  const isValidEmail = (email: string): boolean => {
    // Add email validation logic here if needed
    return true;
  };

  const isValidPassword = (password: string): boolean => {
    // Add password validation logic here if needed
    return true;
  };

  const checkEmailExistence = async (email: string): Promise<boolean> => {
    // Add logic to check email existence in the system
    return false;
  };

  return (
    <div
    className={`min-h-screen flex items-center justify-center relative ${styles.page}`}
    style={{ backgroundImage: 'url("https://th.bing.com/th/id/OIG.byxS1CXdR08nvO6_Mfll?pid=ImgGn")' }}
  >

      <div className={styles.container}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Open a new account
            </h2>
            <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              No monthly payment fees
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit(handleSignIn)} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    {...register('email')}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="flex items-center justify-between">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    {...register('password')}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="button"
                    className="ml-2 text-gray-500 cursor-pointer focus:outline-none"
                    onClick={() => togglePasswordVisibility('password')}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="passwordConfirmation"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password Confirmation
                </label>
                <div className="flex items-center justify-between">
                  <input
                    id="confirmPassword"
                    type={showPasswordConfirmation ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    {...register('passwordConfirmation')}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="button"
                    className="ml-2 text-gray-500 cursor-pointer focus:outline-none"
                    onClick={() => togglePasswordVisibility('passwordConfirmation')}
                  >
                    {showPasswordConfirmation ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
                <div className="flex items-center justify-center mt-4">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Already have an account? Log in here.
                  </Link>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

import { Link, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { atom } from 'jotai';
import tRPCclient from '../../../utils/tRPC';


export interface HelloProps {}


const loginStatusAtom = atom('idle');
const errorMessageAtom = atom('');

export function Login(props: HelloProps) {
  const [loginStatus, setLoginStatus] = useAtom(loginStatusAtom);
  const [errorMessage, setErrorMessage] = useAtom(errorMessageAtom);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FieldValues>();



  // const handleSignInClick = async () => {
  //   navigate('/SignIn');
  // };
  // onClick={handleSignInClick}




  const handleSignIn = async (data: FieldValues) => {
    setLoginStatus('loading');
    setErrorMessage('');

    const hello = tRPCclient.users.login.query;

    try {

      const user = await hello({ email: data.email, password: data.password });

      if (!user) {
        console.log('התחברות נכשלה');
        setLoginStatus('error');
        setErrorMessage('הסיסמה או המייל לא נכונים');
      } else {
        console.log('התחברות מוצלחת');
        setLoginStatus('success');
        navigate('/registeredUser');
      }
    } catch (error) {
      // console.error('שגיאה במהלך התחברות:', error);
      setLoginStatus('error');
      setErrorMessage('שגיאה במהלך התחברות');
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover">
      <div className="bg-white p-8 rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
        We are happy to see you again today        </h2>
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
                className="block w-full rounded-md border-1 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                {...register('password')}
                className="block w-full rounded-md border-1 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              // onClick={handleSignInClick}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
            <p className="text-gray-600 text-sm mt-2">
              Still not registered?{' '}
              <Link to="/SignIn" className="text-indigo-600 hover:underline">
                Go to signup.
              </Link>
            </p>
          </div>
        </form>
        {loginStatus === 'error' && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
      </div>
      
    </div>
  );
}

export default Login;

// להוסיף איפוס סיסמה
{/* <div className="text-sm">
<a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
 forget password
</a>
</div> */}
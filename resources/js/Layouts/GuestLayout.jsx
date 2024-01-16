import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-vh-100 d-flex flex-column  align-items-center pt-4  bg-light">
            <div className='text-center'>
                <Link href="/">
                    <ApplicationLogo className="w-50 h-50 m-auto" />
                </Link>
            </div>

            <div className="w-25 m-auto  mt-3 p-3 bg-white shadow-md overflow-hidden">
                {children}
            </div>
        </div>
    );
}

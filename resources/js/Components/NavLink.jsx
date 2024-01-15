import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, fromClass='', className = '', children, ...props }) {
   
    return (
        <Link
            {...props}
            className={'' + (fromClass? fromClass : active ? 'nav__active nav__item ': 'nav__item') +className}
        >
         {children}
        </Link>
    );
}

import Cookies from 'universal-cookie';

const cookie = new Cookies();

/*
const obj = {
    'usertype': 'producer', // admin || producer
    'userrole': 'professional' // admin || moderator, professional || student ||| public
};
*/

export const hasAccess = () => cookie.get('user') || null;

export const getUsertype = () => cookie.get('user').usertype;

export const getUserrole = () => cookie.get('user').userrole;

export const setUser = (user) => user ? cookie.set('user', user, {'path': '/'}) : cookie.remove('user', {'path': '/'});

// https://www.facebook.com/

/*
export const setUser = user => {
    return user ? cookie.set('user', user, {path: '/'}) : cookie.remove('user', {path: '/'})
}

export const getUser = () => {
    return cookie.get('user') || null
}
*/
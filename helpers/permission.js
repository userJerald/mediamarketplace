const menus = {
    'admin1': '/admin1',
    'admin2': '/admin2',
    'admin3': '/admin3',
    'admin4': '/admin4',
    'admin5': '/admin5',
    'producer1': '/producer1',
    'producer2': '/producer2',
    'producer3': '/producer3',
    'producer4': '/producer4',
    'Sign up or Login': '/login'
};

const adminMenu = ['admin1', 'admin2', 'admin3', 'admin4'];
const moderatorMenu = ['admin1', 'admin2', 'admin5'];
const professionalMenu = ['producer1', 'producer2', 'producer3'];
const studentMenu = ['producer1', 'producer2', 'producer4'];
const publicMenu = ['producer1', 'producer2', 'Sign up or Login'];

export const enumerateMenus = (userrole = '') => {
    switch(userrole) {
        case "admin": {
            return adminMenu.map(menu => (
                {
                    'title': menu,
                    'url': menus[menu]
                }
            ));
        }

        case 'moderator': {
            return moderatorMenu.map(menu => (
                {
                    'title': menu,
                    'url': menus[menu]
                }
            ));
        }

        case 'professional': {
            return professionalMenu.map(menu => (
                {
                    'title': menu,
                    'url': menus[menu]
                }
            ));
        }

        case 'student': {
            return studentMenu.map(menu => (
                {
                    'title': menu,
                    'url': menus[menu]
                }
            ));
        }

        case 'public': {
            return publicMenu.map(menu => (
                {
                    'title': menu,
                    'url': menus[menu]
                }
            ));
        }

        default: {
            return Object.keys(menus).map(menu => (
                {
                    'title': menu,
                    'url': menus[menu]
                }
            ));
        }
    }
}
// pages
import Dashboard from "./pages/Dashboard/DashBoard";


import User from './pages/Member/User/User';
import Driver from './pages/Member/Driver/Driver';
import Manager from './pages/Member/Manager/Manager'
import Place from './pages/Code/Place/Place'
import Region from './pages/Code/Region/Region';

import FormUser from './pages/Member/FormUser/FormUser'
import FormManager from './pages/Member/FormManager/FormManager';
import FormDriver from './pages/Member/FormDriver/FormDriver';
import FormPlace from './pages/Code/FormPlace/FormPlace';



const routes = [
    { path: "/", exact: true, component: Dashboard },
    { path: "/member/user", exact: true, component: User},
    { path: "/member/driver", exact: true, component: Driver },
    { path: "/member/manager", exact: true,  component: Manager },
    { path: "/code/place", exact: true,  component: Place },
    { path: "/code/region",  component: Region},

    { path: "/member/user/form",  component: FormUser },
    { path: "/member/driver/form",  component: FormDriver },
    { path: "/member/manager/form",  component: FormManager },
    { path: "/code/place/form",  component: FormPlace},
    
    { path: "/tour", exact: true,  component: Dashboard },
    { path: "/notice", exact: true, component: Dashboard },
];

export default routes;
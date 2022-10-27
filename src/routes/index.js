import AuthView from '../views/auth/AuthView';
import MainView from '../views/MainView';
import Page2 from '../views/Page2';

let routes = [
	{
		path: '/auth',
		component: AuthView,
		layout: 'auth',
	},
	{
		path: '/',
		component: MainView,
		layout: 'main',
	},
	{
		path: '/page2',
		component: Page2,
		layout: 'main',
	},
];
export default routes;

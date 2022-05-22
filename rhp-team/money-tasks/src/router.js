import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home';
import Transactions from '@/pages/transactions';
import TransactionDetails from '@/pages/transaction-details';
import NotFound from '@/pages/404';

const routes = [
	{
		path: '/',
		name: 'overview-route',
		component: Home,
	},
	{
		path: '/transactions',
		name: 'transaction-route',
		component: Transactions,
	},
	{
		path: '/ts',
		redirect: '/transactions',
	},
	{
		path: '/transactions/:id',
		name: 'transaction-details-route',
		component: TransactionDetails,
	},
	{
		path: '/:pathMath(.*)*',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;

import QuizesView from '../views/QuizesView.vue'
import QuizView from '../views/QuizView.vue'

export const routes = [
	{
		path: '/',
		name: 'quizes',
		component: QuizesView
	},
	{
		path: '/quiz/:id',
		name: 'quiz',
		component: QuizView
	}
];
import { SingleChoiceComponent } from '../questions/question/question-type/single-choice/single-choice.component';
import { TextComponent } from '../questions/question/question-type/text/text.component';
import { MultipleChoiceComponent } from '../questions/question/question-type/multiple-choice/multiple-choice.component';
import { OrderComponent } from '../questions/question/question-type/order/order.component';
import { ConnectingComponent } from '../questions/question/question-type/connecting/connecting.component';

export const questionTypes = {
	'Single Choice': SingleChoiceComponent,
	'Multiple Choice': MultipleChoiceComponent,
	'Text': TextComponent,
	'Order': OrderComponent,
	'Connecting': ConnectingComponent
};

export const API_URL = {
	login: '/server/login',
	getUser: '/server/afterLogin',
	userCategories: '/server/user/categories',
	allUsers: '/server/admin/findUsers',
	edit: '/server/edit',
	createTestBoth: '/server/user/maketest/both',
	createTestDiff: '/server/user/maketest/difficulty',
	createTestCat: '/server/user/maketest/category',
	testSubmit: '/server/user/submit',
	userTestsCat: '/server/admin/category',
	userTestsDiff: '/server/admin/difficulty',
	userTestsStatus: '/server/admin/status',
	// userSingleTest: '/server/admin/demandReview',
	demoTest: '/server/user/demo',
	userStatusTests: '/server/user/status',
	unreviewedTests: '/server/admin/unreviewed',
	reviewQuestion: '/server/admin/review', // post reviewed text to base
};

export const categories = ['JavaScript', 'Java'];

export const status = ['Passed', 'Failed'];

export const formatDate = function(date) {
	let newDate = new Date(date);
	let day: any = newDate.getDate();
	let month: any = newDate.getMonth() + 1;
	let year: any = newDate.getFullYear();

	if (day < 10) {
		day = '0' + day;
	}
	if (month < 10) {
		month = '0' + month;
	}

	const finalDate = `${day}.${month}.${year}.`;
	return finalDate;
}
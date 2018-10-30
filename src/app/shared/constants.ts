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
	demoTest: '/server/demo',
	userStatusTests: '/server/user/status',
	unreviewedTests: '/server/admin/unreviewed',
	reviewQuestion: '/server/admin/review', // post reviewed text question 
	singleUserTests: '/server/admin/usersTests',

	allTests: '/server/admin/allTests',
	findUsers: '/server/admin/findUsers',
	allTestsCategory: '/server/admin/allTestsCategory',
	allTestsDifficulty: '/server/admin/allTestsDifficulty',
	allTestsStatus: '/server/admin/allTestsStatus',

	statisticsForDifficulty: '/server/admin/avg/difficulty',
	statisticsForCategory: '/server/admin/avg/category',
};

export const categories = ['JavaScript', 'Java'];

export const status = ['Passed', 'Failed'];

// SINGLE USER objects for filtering tests 
export const testRequests = {
	// object for difficulty/category
	testTypeObj: {
		type: '',
		userId: 0
	},
	// object for filtering tests by status
	testStatusObj: {
		status: 0,
		userId: 0
	},
	// object for getting all tests from a user
	userTestsObj: {
		id: 0
	}
}

// ALL USERS object for filtering tests
export const allUsersTestRequests = {
	// object for difficulty/category
	testTypeObj: {
		type: '',
		page: 0
	},
	// object for filtering tests by status
	testStatusObj: {
		status: 0,
		page: 0
	},
	//object for getting statistics
	testStatistics: {
		type: '',
		percentage: 0,
		points: 0
	}
}

export const formatDate = function (date) {
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
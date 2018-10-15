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
};

export const categories = ['JavaScript', 'Java'];

export const status = ['Passed', 'Failed'];

import * as API from '@/api/common'

export function get(url, type, params) {
	return API.GET(url, type, params);
};

export function post(url, type, params) {
	return API.POST(url, type, params)
};

export function patch(url, type, params) {
	return API.PATCH(url, type, params);
};

export function del(url, type, params) {
	return API.DELETE(url, type, params);
};
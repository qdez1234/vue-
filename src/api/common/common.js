
import * as API from '@/api/common'

export function get(url,params,type) {
	return API.GET(url, type, params);
};

export function post(url, params, type) {
	return API.POST(url, params, type)
};

export function patch(url, params, type) {
	return API.PATCH(url, type, params);
};

export function del(url, params, type) {
	return API.DELETE(url, type, params);
};
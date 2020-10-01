import request from '@/utils/request';

export async function getQuestionQuerys(params) {
  return request('/question/querys', {
    method: 'GET',
    data: params,
  });
}
export async function getQuestionShareList(params) {
  return request('/v1/paper/share/list', {
    method: 'GET',
    data: params,
  });
}


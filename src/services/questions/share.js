import request from '@/utils/request';

export async function getQuestionQuerys(params) {
  return request('/api/question/querys', {
    method: 'GET',
    data: params,
  });
}
export async function getQuestionShareList(params) {
  return request('/api/question/share', {
    method: 'GET',
    data: params,
  });
}
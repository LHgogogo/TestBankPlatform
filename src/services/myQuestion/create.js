import request from '@/utils/request';

export async function getQuestionSubject(params) {
  return request('/v1/subjectDictionary/directories', {
    method: 'GET',
    data: params,
  });
}
export async function getTags(params) {
  return request('/v1/tag/list', {
    method: 'GET',
    data: params,
  });
}
export function uploadImg(params) {
  return request('http://114.55.94.182/api/v1/file/images/upload', {
    method: 'POST',
    data: params,
  });
  
}
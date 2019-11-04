import api from './request'

export const getAdver = params => {
  return api.get('other/app/adver/get', params)
}

export const getAdverContent = params => {
  return api.post('other/app/adver/get_content', params)
}

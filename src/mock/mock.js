import Mock from 'mockjs'
const Random = Mock.Random

const mockData = {
  'list|1-10': [
    {
      'id|+1': 1,
      email: '@email',
      date: '@date(yyyy-MM-dd)',
      image: Random.image('200x100')
    }
  ]
}

const getData = (option) => {
  return {
    name: Random.string()
  }
}

const regUrl = new RegExp('^/getStar' + '(\\?.*|)$')

Mock.mock('/test', 'get', mockData)
Mock.mock(regUrl, 'get', getData)

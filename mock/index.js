const Mock = require('mockjs')
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(Mock.mock({
    "result": "success",
    "messages": [],
    "fieldErrors": {},
    "errors": [],
    "data": {
      "pageSize": 5,
      "pageNo": 1,
      "totalPage": 0,
      "totalCount": 0,
      "listData": []
    }
  }))
})

router.get('/xxx', (req, res, next) => {
  res.json(Mock.mock({
    result: 'success',
    data: {
      "listData|10": [
        {
          "id|+1": 1
        }
      ]
    }
  }))
})

module.exports = router;

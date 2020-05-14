const request = require('supertest')
const app = require('../server/app')

describe('Test the article evaluator path', () => {
    test('It should respond whatever Aylien responds', () => {
        return request(app)
            .get('/article?url=' + encodeURIComponent('https://www.theguardian.com/world/2020/may/14/coronavirus-uk-privately-run-ppe-stockpile-chaos'))
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})
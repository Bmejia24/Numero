const request = require('request')

const username = 'Bmejia'
const apiKey = 'd341873a-a895-4069-87b8-12ef0a42ad6f'

const encodeAuth= `Basic ${Buffer.from(`${username}:${apiKey}`).toString('base64')}`

const configuration = {
  sessionName:        'Automation test session',
  sessionDescription: '',
  udid:               '00008030-000A751E21BA802E',
  // The given group is used for finding devices and the created session will be visible for all members within the group.
  groupId:            2249, // Group: QA Testing
  deviceGroup:        'KOBITON',
  app:                'kobiton-store:v185256',
  testRunner:         'https://kobiton-us-east.s3.amazonaws.com/test-runner/users/143683/Payload-b0868f50-8346-11eb-a7cf-4bfb6a33f4a6.ipa?AWSAccessKeyId=AKIAJ7BONOZUJZMWR4WQ&Expires=1615605721&Signature=v6mc%2Fogs5LLojqXx06IuKzaPrSU%3D',
  testFramework:      'XCUITEST',

  // The data format value will be inputted:
  //      tests = ["Test-Class-Name/Test-Method-Name"]

  // If the "tests" is blank, all tests in testRunner will be run.

  // To specific some test cases: let's say we have 2 classes: "Test-Class-Name-1"
  // and "Test-Class-Name-2". To run "Test-Class-Name-1" and "Test-Class-Name-2"
  // class in test runner file, the input will be:
  //      tests = ["Test-Class-Name-1", "Test-Class-Name-2"]

  // To run "Test-Method-Name-1" method in "Test-Class-Name-1" class and run
  // "Test-Class-Name 2" class in test runner file, the input will be:
  //      tests =["Test-Class-Name-1/Test-Method-Name-1", "Test-Class-Name-2"]

  // Caution: When you use test plan URL and test array at the same time,
  // the test plan will have priority over the test array.
  testPlan:           'https://kobiton-us-east.s3.amazonaws.com/test-plan/users/143683/FullTest-b83a9b10-8346-11eb-9c8b-1975cdc439a2.xctestplan?AWSAccessKeyId=AKIAJ7BONOZUJZMWR4WQ&Expires=1615605733&Signature=GDwRynT%2FQ%2BZ8VCS5pg%2BEv%2B3DRPE%3D'
}

// Access https://github.com/kobiton/samples/tree/master/xcuitest/csharp to learn more about configuration of NodeJS language.

const headers = {
  'Content-Type':'application/json',
  'Authorization': encodeAuth,
  'Accept':'application/json'
}
const body = {
  configuration
}

request({
  url: 'https://api.kobiton.com/hub/session',
  json: true,
  method: 'POST',
  body,
  headers
}, function (err, response, body) {
  if (err) return console.error('Error:', err)
  console.log('Response body:', body)
})

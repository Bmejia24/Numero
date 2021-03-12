require 'uri'
require 'net/http'
require 'json'
require 'base64'

username = "Bmejia";
apiKey = "d341873a-a895-4069-87b8-12ef0a42ad6f";
encodeAuth = 'Basic ' + Base64.encode64(username + ':' + apiKey).gsub("\n", '')

url = URI('https://api.kobiton.com/hub/session')

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request['Content-Type'] = 'application/json'
request['Authorization'] = encodeAuth
request['Accept'] = 'application/json'

configuration = {
  'configuration': {
    :sessionName =>        'Automation test session',
    :sessionDescription => 'This is an example for XCUITest testing',      
    :udid =>               '00008030-001A159C3A50802E',
    :deviceGroup =>        'KOBITON',
    :app =>                'kobiton-store:v185256',
    :testRunner =>         'https://kobiton-us-east.s3.amazonaws.com/test-runner/users/143683/Payload-fdbbae90-8350-11eb-a423-535fbc36d4cc.ipa?AWSAccessKeyId=AKIAJ7BONOZUJZMWR4WQ&Expires=1615610144&Signature=whGn8wmxhC8yDgzwyj8jcehBxRI%3D',
    :testFramework =>      'XCUITEST',
    :sessionTimeout =>     30,

    # The user can specifically test running via testPlan or tests
    # If the testPlan and tests are set, the test framework will auto-select the testPlan first
    :tests =>               [],
    :testPlan =>           'https://kobiton-us-east.s3.amazonaws.com/test-plan/users/143683/FullTest-06446f70-8351-11eb-9c8b-1975cdc439a2.xctestplan?AWSAccessKeyId=AKIAJ7BONOZUJZMWR4WQ&Expires=1615610158&Signature=zLeXv51brLQPaIsdQgRAG8k0txA%3D'
  }
}

configuration_json = configuration.to_json
request.body = configuration_json
response = https.request(request)
puts response.read_body




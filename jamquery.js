import Sequalize from "sequelize"


export async function list(event) {
  const keyword = event.pathParameters["keyword"]

  return {
    statusCode: 200,
    body: JSON.stringify({
      keyword: keyword
    }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}

export async function add(event) {
  const body = JSON.parse(event.body)

  const ret = {
    statusCode: 200,
    body: JSON.stringify({
      input: event,
      data: body
    }, null, 2)
  }

  return ret
}
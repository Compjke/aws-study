console.log('Init Lambda');

exports.handler = async (event) => {
	const path = event.rawPath;
	const method = event.requestContext.http.method;

	if (path === '/hello' && method === 'GET') {
		return {
			body: JSON.stringify({ statusCode: 200, message: 'Hello from Lambda' }),
		};
	} else {
		return {
			body: JSON.stringify({
				statusCode: 400,
				message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`,
			}),
		};
	}
};

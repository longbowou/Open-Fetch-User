export const handler = async (event) => {
    const user = event.requestContext.authorizer;

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({
            user
        }),
    };
};

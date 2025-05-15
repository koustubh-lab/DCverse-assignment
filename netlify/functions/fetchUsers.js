export async function handler(event, context) {
  try {
    const res = await fetch("https://reqres.in/api/users?page=1", {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });
    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error", error: error.message }),
    };
  }
}

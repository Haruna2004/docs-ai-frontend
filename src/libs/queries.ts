const BASE_URL = process.env.NEXT_PUBLIC_PYSERVER_URL as string;
const URL_PATH = "query_docs_ai?query_text";

export async function getAiResponse(userQuery: string) {
  try {
    const response = await fetch(`${BASE_URL}/${URL_PATH}=${userQuery}`, {
      method: "POST",
    });
    const data = await response.json();
    const { success, message, data: resData } = data;

    if (success !== true) {
      // handle problem
      return {
        success: false,
        message,
        resData,
      };
    }
    // Request is successfull
    return {
      success,
      message,
      resData,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error processing request",
      resData: null,
    };
  }
}

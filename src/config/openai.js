const OpenAi = require("openAi");
const VARIABLES = require(".");

const openAi = new OpenAi({
  apiKey: VARIABLES.OPENAI_API_KEY,
});

const sendPromptToOpenAi = async (messages = []) => {
  console.log(messages);
  try {
    const result = await openAi.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 1,
    });
    return {
      success: true,
      message: "Request Success",
      data: result?.choices[0].message?.content,
    };
  } catch (error) {
    return {
      success: false,
      message: "Request failed",
      error_message: error.message,
    };
  }
};

module.exports = {
  sendPromptToOpenAi,
};

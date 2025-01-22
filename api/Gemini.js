const axios = require('axios');
exports.config = {
  name: "gemini",
  description: "chat with gemini model gemini-1.5-flash",
  author: "lance",
  category: "ai",
  method: "get",
  link: "/gemini"
}
exports.initialize = async ({ req, res }) => {
  const { prompt, id } = req.query;
  if(!prompt || !id)
   return res.status(400).json({ error: "Please make sure to provide both Parameters which are prompt and uid" })
  try{
    const content = await axios.get("https://gemini-api-py.onrender.com/gemini", params: { query: prompt, uid: id })
    const text = content.data.response;
    res.status(200).json({ response: text })
  } catch (e){
    return res.status(500).json({ error: `${e.message}` })
  }
}
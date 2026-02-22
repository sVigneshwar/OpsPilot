const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const OPENAI_KEY = process.env.OPENAI_API_KEY
let openaiClient = null
if (OPENAI_KEY) {
  try {
    const { Configuration, OpenAIApi } = require('openai')
    const cfg = new Configuration({ apiKey: OPENAI_KEY })
    openaiClient = new OpenAIApi(cfg)
  } catch (e) {
    console.warn('OpenAI package not installed or unable to initialize client')
  }
}

app.post('/api/ai/insights', async (req, res) => {
  const { prompt } = req.body || {}
  if (openaiClient) {
    try {
      const completion = await openaiClient.createChatCompletion({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: `Analyze metrics and respond concisely: ${prompt}` }],
        max_tokens: 500
      })
      const text = completion.data.choices?.[0]?.message?.content || 'No response'
      return res.json({ result: text })
    } catch (err) {
      console.error('OpenAI error', err)
      return res.status(500).json({ error: 'OpenAI call failed' })
    }
  }

  // Fallback: simulated/free response when no API key provided
  const reply = `Simulated AI response for prompt: ${prompt}. Summary: revenue is stable and growing.`
  setTimeout(()=>res.json({ result: reply }), 600)
})

const port = process.env.PORT || 4000
app.listen(port, ()=> console.log('AI server running on', port))

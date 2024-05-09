import OpenAI from 'openai'

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true })

async function generateBackstory(characterInfo) {
    const completion = await openai.chat.completions.create({
        messages: [{ "role": "system", "content": "You are a lore building machine. We give you character info and you give us a beautiful story." },
        {
            "role": "user", "content": `Generate a backstory for this character based on the attributes provided. This should only be about a paragraph.

                ${characterInfo.name},
                ${characterInfo.gender},
                ${characterInfo.race},
                ${characterInfo.class},
                ${characterInfo.faction},
                ${characterInfo.weapon},
                ` }],
        model: "gpt-3.5-turbo"
    })
    const response = completion.choices[0].message.content
    return response
}

async function generateDescription(characterInfo) {
    const completion = await openai.chat.completions.create({
        messages: [{ "role": "system", "content": "You are a lore building machine. We give you character info and you give us a beautiful story." },
        {
            "role": "user", "content": `Generate a character description. You do not need to provide any backstory, this should just be a description of what the character looks like visually. This should only be a few sentences.

            ${characterInfo.name},
            ${characterInfo.gender},
            ${characterInfo.race},
            ${characterInfo.class},
            ${characterInfo.faction},
            ${characterInfo.weapon},
            ` }],
        model: "gpt-3.5-turbo"
    })
    const response = completion.choices[0].message.content
    return response
}

export { generateBackstory, generateDescription }
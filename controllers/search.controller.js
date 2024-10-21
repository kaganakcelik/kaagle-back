import data from '../data.json' with { type: "json" };

import MiniSearch from 'minisearch'






export const search = async (req, res) => {
        const searchReq = req.body.search

        let miniSearch = new MiniSearch({
            fields: ['description', 'keywords', 'name'], // fields to index for full-text search
            storeFields: ['site', 'description', 'name'] // fields to return with search results
        })
        
        miniSearch.addAll(data)
        let result = miniSearch.search(searchReq)
        
        let toReturn = []
        
        if (result.length === 0) console.log('nothing found')
        else {
            for (let i = 0; i < 10; i++) {
            if (result[i] === undefined) break
            const element = result[i];
            toReturn.push({name: element.name, site: element.site, description: element.description})
            }
        }

        // console.log(toReturn[0])

        res.json(
            toReturn
        )


    // const completion = await openai.chat.completions.create({
    //     messages: [
    //         {"role": "system", "content": "You are a helpful assistant that will summarize the given text in a detailed format with bullet points. Make sure the summary is not too sort and there should be headers seperating the different parts of the summary. If you want to make anything bold make sure to only use '**' and not anything else."},
    //         {"role": "user", "content": `${transcript}`},
    //     ],
    //     model: "gpt-3.5-turbo",
    //   });

    // res.json({
    //     summary: completion.choices[0].message.content
    // })
    
}
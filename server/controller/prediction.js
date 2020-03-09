
exports.makePredictions = async (req, res) => {
    try {
        const { depressed, gender, education, age, income, pay4sex, relationship, stigma } = req.body
        // if(depressed === 'no' || pay4sex === 'no' || stigma === 'no' || income === 'high' || relationship === 'yes') {
        //     return res.status(200).json({
        //         message: 'safe'
        //     })
        // }
        if(depressed === 'yes' || pay4sex === 'no' || stigma === 'yes' || income === 'low' || relationship === 'yes') {
            return res.status(200).json({
                message: 'not safe',
                score: 3.5/5
            })
        }
        else if(depressed === 'no' || pay4sex === 'yes' || stigma === 'yes' || income === 'low' || relationship === 'no') {
            return res.status(200).json({
                message: 'not safe',
                score: 3/5
            })
        }
        else if(depressed === 'yes' || pay4sex === 'yes' || stigma === 'yes' || income === 'high' || relationship === 'no') {
            return res.status(200).json({
                message: 'not safe',
                score: 4/5
            })
        }
        else if(depressed === 'yes' || pay4sex === 'no' || stigma === 'yes' || income === 'low' || relationship === 'yes') {
            return res.status(200).json({
                message: 'not safe',
                score: 3/5
            })
        }
        else if(depressed === 'no' || pay4sex === 'yes' || stigma === 'no' || income === 'low' || relationship === 'no') {
            return res.status(200).json({
                message: 'not safe',
                score: 2/5
            })
        }
        else {
            return res.status(200).json({
                message: 'safe',
                score: 4/5
            })
        }
        // if(depressed === 'yes' || education === 'PhD' || age === 'adult' || income === 'low' || pay4sex === 'yes' || relationship === 'no' || stigma === 'yes') {
        //     return res.status(200).json({
        //         message: 'Sucide probability',
        //         score: 7/8
        //     })
        // }
        // else if(depressed === 'yes' || education === 'Msc' || age === 'adult' || income === 'low' || pay4sex === 'yes' || relationship === 'no' || stigma === 'yes') {
        //     return res.status(200).json({
        //         message: 'Sucide probability',
        //         score: 7/8
        //     })
        // }
        // else if(depressed === 'yes' || gender === 'f' || education === 'Bsc' || age === 'adult' || income === 'low' || pay4sex === 'yes' || relationship === 'yes' || stigma === 'yes') {
        //     return res.status(200).json({
        //         message: 'Sucide probability'
        //     })
        // }
        // else if(depressed === 'yes' || gender === 'f' || education === 'none' || age === 'adult' && age === 'teen' || income === 'low' || pay4sex === 'yes' || relationship === 'yes' || stigma === 'yes') {
        //     return res.status(200).json({
        //         message: 'Sucide probability'
        //     })
        // }
        // else if(depressed === 'yes' && depressed === 'no' || gender === 'f' || education === 'none' && education === 'Bsc' && education === 'Msc' && education === 'PhD' || age === 'adult' && age === 'teen' || income === 'low' || pay4sex === 'yes' || relationship === 'no' || stigma === 'yes') {
        //     return res.status(200).json({
        //         message: 'Sucide probability'
        //     })
        // }
        // else {
        //     return res.status(200).json({
        //         message: 'You are safe'
        //     })
        // }
    } catch (e) {
        return res.status(500).json({
            message: e.message
        })
    }
}


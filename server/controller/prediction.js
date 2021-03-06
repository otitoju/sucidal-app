
exports.makePredictions = async (req, res) => {
    try {
        const { depressed, gender, education, age, income, pay4sex, relationship, stigma } = req.body
        
        if(!depressed || !pay4sex ) {
            return res.status(400).json({
                message: "Invalid"
            })
        }
        else {
            if(depressed == 'yes' && pay4sex == 'no' && stigma == 'yes' && income == 'low' && relationship == 'yes') {
                return res.status(200).json({
                    message: 'not safe',
                    score: 3.5/5
                })
            }
            else if(depressed == 'no' && pay4sex == 'yes' && stigma == 'yes' && income == 'low' && relationship == 'no') {
                return res.status(200).json({
                    message: 'not safe',
                    score: 3/5
                })
            }
            else if(depressed == 'yes' && pay4sex == 'yes' && stigma == 'yes' && income == 'high' && relationship == 'no') {
                return res.status(200).json({
                    message: 'not safe',
                    score: 4/5
                })
            }
            else if(depressed == 'yes' && pay4sex == 'no' && stigma == 'yes' && income == 'low' && relationship == 'yes') {
                return res.status(200).json({
                    message: 'not safe',
                    score: 3/5
                })
            }
            else if(depressed == 'no' && pay4sex == 'yes' && stigma == 'no' && income == 'low' && relationship == 'no') {
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
        }
        
        
    } catch (e) {
        return res.status(500).json({
            message: e.message
        })
    }
}


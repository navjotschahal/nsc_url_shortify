const Url = require('../model-schemas/url')

exports.redirectToOriginalURL = async (req, res, next) => {
    try {
        const url = await Url.findOne({
            uid: req.query.uid
        })
        if (url) {
            return res.redirect(url.originalURL)
        } else {
            return res.status(404).json('No URL Found')
        }
    }
    catch (err) {
        console.error(err)
        res.status(500).json('Server Error')
    }
}
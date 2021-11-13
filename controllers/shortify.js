const validUrl = require('valid-url')
const shortid = require('shortid')

const Url = require('../model-schemas/url')

exports.shortifyUrl = async (req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    const longURLreceived = req.body.originalURL;
    const uid = shortid.generate();

    if (validUrl.isUri(longURLreceived)) {
        try {
            let urlInDB = await Url.findOne({
                originalURL: longURLreceived
            })

            if (urlInDB) {
                res.json(urlInDB)
            } else {
                const shortUrl = url + '/' + uid;

                const shortifiedUrlData = new Url({
                    uid: uid,
                    originalURL: req.body.originalURL,
                    shortURL: shortUrl
                });
                console.log(shortifiedUrlData);
                await shortifiedUrlData.save()
                res.json(shortifiedUrlData)
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).json('Server Error')
        }
    } else {
        res.status(401).json('Invalid longUrl')
    }
}

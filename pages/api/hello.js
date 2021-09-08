// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {Node: Logtail} = require("@logtail/js");
const logtail = new Logtail("739qiFhRaZHxsTjZDvYxmnG3");
// const logtail2 = new Logtail("ufzxfr43TGMkWyC3rZBbe2xn");

export default function handler(req, res) {
    logtail.info("logtail installed");
    // logtail2.info("second logtail source")
    console.info("default console log")
    res.status(200).json({name: 'John Doe'})
}

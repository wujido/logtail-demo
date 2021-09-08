// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {Node: Logtail} = require("@logtail/js");
const logtail = new Logtail("739qiFhRaZHxsTjZDvYxmnG3");

export default function handler(req, res) {
    logtail.info("logtail installed");
    console.info("default console log")
    res.status(200).json({name: 'John Doe'})
}

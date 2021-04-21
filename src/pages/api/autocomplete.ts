import { NextApiHandler } from "next";
import { autoComplete } from "@api";

const handler: NextApiHandler = async (req, res) => {
	res.status(200).json(await autoComplete(req.query.q as string));
};
export default handler;

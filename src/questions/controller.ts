import { getTest } from "./service";

export async function test(req, res) {
    const testResult = await getTest();
    res.send(testResult);
}

